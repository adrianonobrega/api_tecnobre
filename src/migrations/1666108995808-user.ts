import { MigrationInterface, QueryRunner } from "typeorm";

export class user1666108995808 implements MigrationInterface {
    name = 'user1666108995808'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "os" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name_equipament" character varying(100) NOT NULL, "description" character varying(300) NOT NULL, "status" character varying(65) NOT NULL, "solution" character varying, "imagem" character varying, "total_price" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_aabe1caa41ca9f58a18ec4832ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "email" character varying(127) NOT NULL, "cpf" character varying(11), "cnpj" character varying(14), "password" character varying(300) NOT NULL, "birth_data" character varying(8), "isadm" boolean NOT NULL DEFAULT false, "store" boolean NOT NULL, "group" character varying NOT NULL DEFAULT 'client', "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "UQ_a6235b5ef0939d8deaad755fc87" UNIQUE ("cpf"), CONSTRAINT "UQ_7734202d9aea21a0f3b0dad1568" UNIQUE ("cnpj"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "description" character varying(300) NOT NULL, "brand" character varying(50) NOT NULL, "category" character varying(50) NOT NULL, "image" character varying(300) NOT NULL, "price" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying(65) NOT NULL, "total_price" numeric(9,2) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "addressId" uuid, CONSTRAINT "PK_c524ec48751b9b5bcfbf6e59be7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying(200) NOT NULL, "cep" character varying(8) NOT NULL, "number" integer NOT NULL, "district" character varying(50) NOT NULL, "city" character varying(50) NOT NULL, "state" character varying(50) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "cart_product_product" ("cartId" uuid NOT NULL, "productId" uuid NOT NULL, CONSTRAINT "PK_3fe167ea5ec46c18adc550e9419" PRIMARY KEY ("cartId", "productId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_79eff0740cf8d0afd9cf339b83" ON "cart_product_product" ("cartId") `);
        await queryRunner.query(`CREATE INDEX "IDX_85d9796b308d382c39d3503181" ON "cart_product_product" ("productId") `);
        await queryRunner.query(`ALTER TABLE "os" ADD CONSTRAINT "FK_a802c9bb9a94741b00886f18b7b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_329b8ae12068b23da547d3b4798" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_756f53ab9466eb52a52619ee019" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart" ADD CONSTRAINT "FK_5ad17e3bf3749fdddc6e8050d6e" FOREIGN KEY ("addressId") REFERENCES "user_address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "user_address" ADD CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" ADD CONSTRAINT "FK_79eff0740cf8d0afd9cf339b839" FOREIGN KEY ("cartId") REFERENCES "cart"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" ADD CONSTRAINT "FK_85d9796b308d382c39d35031818" FOREIGN KEY ("productId") REFERENCES "product"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cart_product_product" DROP CONSTRAINT "FK_85d9796b308d382c39d35031818"`);
        await queryRunner.query(`ALTER TABLE "cart_product_product" DROP CONSTRAINT "FK_79eff0740cf8d0afd9cf339b839"`);
        await queryRunner.query(`ALTER TABLE "user_address" DROP CONSTRAINT "FK_1abd8badc4a127b0f357d9ecbc2"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_5ad17e3bf3749fdddc6e8050d6e"`);
        await queryRunner.query(`ALTER TABLE "cart" DROP CONSTRAINT "FK_756f53ab9466eb52a52619ee019"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_329b8ae12068b23da547d3b4798"`);
        await queryRunner.query(`ALTER TABLE "os" DROP CONSTRAINT "FK_a802c9bb9a94741b00886f18b7b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_85d9796b308d382c39d3503181"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_79eff0740cf8d0afd9cf339b83"`);
        await queryRunner.query(`DROP TABLE "cart_product_product"`);
        await queryRunner.query(`DROP TABLE "user_address"`);
        await queryRunner.query(`DROP TABLE "cart"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "os"`);
    }

}
