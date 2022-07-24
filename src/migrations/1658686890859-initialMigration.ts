import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1658686890859 implements MigrationInterface {
    name = 'initialMigration1658686890859'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "total_price" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "userId" uuid, "storeId" uuid, "osId" uuid, CONSTRAINT "REL_24328ebd6d0aeb326bcf2f4ece" UNIQUE ("osId"), CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "description" character varying NOT NULL, "brand" character varying NOT NULL, "category" character varying NOT NULL, "image" integer NOT NULL, "price" boolean NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "storeId" uuid, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "os" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "status" character varying NOT NULL, "total_price" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), "storeId" uuid, "userId" uuid, CONSTRAINT "PK_aabe1caa41ca9f58a18ec4832ab" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "store" ADD "addressId" uuid`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "UQ_cd32344f427e665d01b9fb1cd1a" UNIQUE ("addressId")`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_caabe91507b3379c7ba73637b84" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_1a79b2f719ecd9f307d62b81093" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "order" ADD CONSTRAINT "FK_24328ebd6d0aeb326bcf2f4ecea" FOREIGN KEY ("osId") REFERENCES "os"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "product" ADD CONSTRAINT "FK_32eaa54ad96b26459158464379a" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "store" ADD CONSTRAINT "FK_cd32344f427e665d01b9fb1cd1a" FOREIGN KEY ("addressId") REFERENCES "stores_address"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "os" ADD CONSTRAINT "FK_b33cfce9c3e1f0fb9ebdf902d17" FOREIGN KEY ("storeId") REFERENCES "store"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "os" ADD CONSTRAINT "FK_a802c9bb9a94741b00886f18b7b" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "os" DROP CONSTRAINT "FK_a802c9bb9a94741b00886f18b7b"`);
        await queryRunner.query(`ALTER TABLE "os" DROP CONSTRAINT "FK_b33cfce9c3e1f0fb9ebdf902d17"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "FK_cd32344f427e665d01b9fb1cd1a"`);
        await queryRunner.query(`ALTER TABLE "product" DROP CONSTRAINT "FK_32eaa54ad96b26459158464379a"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_24328ebd6d0aeb326bcf2f4ecea"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_1a79b2f719ecd9f307d62b81093"`);
        await queryRunner.query(`ALTER TABLE "order" DROP CONSTRAINT "FK_caabe91507b3379c7ba73637b84"`);
        await queryRunner.query(`ALTER TABLE "store" DROP CONSTRAINT "UQ_cd32344f427e665d01b9fb1cd1a"`);
        await queryRunner.query(`ALTER TABLE "store" DROP COLUMN "addressId"`);
        await queryRunner.query(`DROP TABLE "os"`);
        await queryRunner.query(`DROP TABLE "product"`);
        await queryRunner.query(`DROP TABLE "order"`);
    }

}
