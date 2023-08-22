import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'eligible_brand' })
export class ElegibleBrandEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'code', nullable: false })
  code: number;

  @Column({ name: 'description', length: 250, nullable: false })
  description: string;

  @Column({name: 'status', type: 'boolean'})
  status: boolean;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}