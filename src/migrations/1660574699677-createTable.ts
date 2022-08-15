import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1660574699677 implements MigrationInterface {
    name = 'createTable1660574699677'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "image" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "price" boolean NOT NULL`);
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "image"`);
        await queryRunner.query(`ALTER TABLE "product" ADD "image" integer NOT NULL`);
    }

}
