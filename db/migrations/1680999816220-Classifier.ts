import { MigrationInterface, QueryRunner } from "typeorm";

export class Classifier1680999816220 implements MigrationInterface {
    name = 'Classifier1680999816220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "level5" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" character varying NOT NULL, "parent_path" text NOT NULL, "level4Id" integer, CONSTRAINT "PK_1d8e2298db9ace74bee0a63e46f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level4" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" character varying NOT NULL, "parent_path" text NOT NULL, "level3Id" integer, CONSTRAINT "PK_3478a588447b66c6f6d4536e3af" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level3" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" character varying NOT NULL, "parent_path" text NOT NULL, "level2Id" integer, CONSTRAINT "PK_31a38afe6f6063253b6d3113ee9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level2" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" character varying NOT NULL, "parent_path" text NOT NULL, "level1Id" integer, CONSTRAINT "PK_aafb95f32fa64ac20fc623486a6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "level1" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "code" character varying NOT NULL, "description" character varying NOT NULL, "parent_path" text NOT NULL, "classifierId" integer, CONSTRAINT "PK_898e74eff8726e65db05da80dd6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classifier" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "original_name" character varying NOT NULL, "file_name" character varying NOT NULL, CONSTRAINT "PK_b1791847dddefee54aa3b609669" PRIMARY KEY ("id"))`);
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
        await queryRunner.query(`ALTER TABLE "level5" ADD CONSTRAINT "FK_075a1d0bd6bcf3fc4e0d407d9d4" FOREIGN KEY ("level4Id") REFERENCES "level4"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level4" ADD CONSTRAINT "FK_b7284df92bb3d9184264fb8fb89" FOREIGN KEY ("level3Id") REFERENCES "level3"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level3" ADD CONSTRAINT "FK_c6247fc451bf67761b1cbfecaf9" FOREIGN KEY ("level2Id") REFERENCES "level2"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level2" ADD CONSTRAINT "FK_245fc9085385a13edbb340a4945" FOREIGN KEY ("level1Id") REFERENCES "level1"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "level1" ADD CONSTRAINT "FK_05bd4f3809b7757f03d07a4d2ab" FOREIGN KEY ("classifierId") REFERENCES "classifier"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "level1" DROP CONSTRAINT "FK_05bd4f3809b7757f03d07a4d2ab"`);
        await queryRunner.query(`ALTER TABLE "level2" DROP CONSTRAINT "FK_245fc9085385a13edbb340a4945"`);
        await queryRunner.query(`ALTER TABLE "level3" DROP CONSTRAINT "FK_c6247fc451bf67761b1cbfecaf9"`);
        await queryRunner.query(`ALTER TABLE "level4" DROP CONSTRAINT "FK_b7284df92bb3d9184264fb8fb89"`);
        await queryRunner.query(`ALTER TABLE "level5" DROP CONSTRAINT "FK_075a1d0bd6bcf3fc4e0d407d9d4"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "classifier"`);
        await queryRunner.query(`DROP TABLE "level1"`);
        await queryRunner.query(`DROP TABLE "level2"`);
        await queryRunner.query(`DROP TABLE "level3"`);
        await queryRunner.query(`DROP TABLE "level4"`);
        await queryRunner.query(`DROP TABLE "level5"`);
    }

}
