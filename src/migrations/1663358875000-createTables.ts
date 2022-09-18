import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1663358875000 implements MigrationInterface {
    name = 'createTables1663358875000'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "stores_address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "cep" character varying NOT NULL, "number" integer NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_25fa52e503fd77e0a5004a381ce" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "os" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_equipament" character varying NOT NULL, "description" character varying NOT NULL, "status" character varying NOT NULL, "solution" character varying, "imagem" character varying, "total_price" character varying, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "storeId" uuid, CONSTRAINT "PK_aabe1caa41ca9f58a18ec4832ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "store" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cnpj" character varying NOT NULL, "password" character varying NOT NULL, "isadm" boolean NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "addressId" uuid, CONSTRAINT "REL_cd32344f427e665d01b9fb1cd1" UNIQUE ("addressId"), CONSTRAINT "PK_f3172007d4de5ae8e7692759d79" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "brand" character varying NOT NULL, "category" character varying NOT NULL, "image" character varying NOT NULL, "price" integer NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "storeId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "email" character varying NOT NULL, "cpf" character varying NOT NULL, "password" character varying NOT NULL, "idade" integer NOT NULL, "isadm" boolean NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "total_price" numeric(9,2) NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "storeId" uuid, "addressId" uuid, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "cep" character varying NOT NULL, "number" integer NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_product_product" ("cartId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_3fe167ea5ec46c18adc550e9419" PRIMARY KEY ("cartId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_79eff0740cf8d0afd9cf339b83" ON "cart_product_product" ("cartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_85d9796b308d382c39d3503181" ON "cart_product_product" ("productId") `);
        await queryRunner.query(`CREATE TABLE "cart_os_os" ("cartId" uuid NOT NULL, "osId" uuid NOT NULL, CONSTRAINT "PK_f595f46aaa6d1d3e684126e4596" PRIMARY KEY ("cartId", "osId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6d3543c2726bea581526bdd62b" ON "cart_os_os" ("cartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_c914f104a05f50ba03c414461f" ON "cart_os_os" ("osId") `);
        await queryRunner.query(`ALTER TABLE "os" ADD CONSTRAINT "FK_b33cfce9c3e1f0fb9ebdf902d17" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_cd32344f427e665d01b9fb1cd1a" FOREIGN KEY ("addressId") REFERENCES "stores_address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_32eaa54ad96b26459158464379a" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_20e86d185ed6b2efa0d0add08eb" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_5ad17e3bf3749fdddc6e8050d6e" FOREIGN KEY ("addressId") REFERENCES "user_address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" ADD CONSTRAINT "FK_79eff0740cf8d0afd9cf339b839" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" ADD CONSTRAINT "FK_85d9796b308d382c39d35031818" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_os_os" ADD CONSTRAINT "FK_6d3543c2726bea581526bdd62b8" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_os_os" ADD CONSTRAINT "FK_c914f104a05f50ba03c414461fd" FOREIGN KEY ("osId") REFERENCES "os"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_os_os" DROP CONSTRAINT "FK_c914f104a05f50ba03c414461fd"`);
        await queryRunner.query(`ALTER TABLE "cart_os_os" DROP CONSTRAINT "FK_6d3543c2726bea581526bdd62b8"`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" DROP CONSTRAINT "FK_85d9796b308d382c39d35031818"`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" DROP CONSTRAINT "FK_79eff0740cf8d0afd9cf339b839"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_5ad17e3bf3749fdddc6e8050d6e"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_20e86d185ed6b2efa0d0add08eb"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_32eaa54ad96b26459158464379a"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_cd32344f427e665d01b9fb1cd1a"`);
        await queryRunner.query(`ALTER TABLE "os" DROP CONSTRAINT "FK_b33cfce9c3e1f0fb9ebdf902d17"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_c914f104a05f50ba03c414461f"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d3543c2726bea581526bdd62b"`);
        await queryRunner.query(`DROP TABLE "cart_os_os"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_85d9796b308d382c39d3503181"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79eff0740cf8d0afd9cf339b83"`);
        await queryRunner.query(`DROP TABLE "cart_product_product"`);
        await queryRunner.query(`DROP TABLE "user_address"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "store"`);
        await queryRunner.query(`DROP TABLE "os"`);
        await queryRunner.query(`DROP TABLE "stores_address"`);
    }

}
