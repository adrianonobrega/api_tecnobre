import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1658512778323 implements MigrationInterface {
    name = 'initialMigration1658512778323'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user_address" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "address" character varying NOT NULL, "cep" character varying NOT NULL, "number" integer NOT NULL, "district" character varying NOT NULL, "city" character varying NOT NULL, "state" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "update_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_302d96673413455481d5ff4022a" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "user_address"`);
    }

}
