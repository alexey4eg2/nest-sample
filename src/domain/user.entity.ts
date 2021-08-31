import { BaseEntity, Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'Users' })
export default class User extends BaseEntity {
  @PrimaryColumn()
  Id!: number;

  @Column({ type: 'varchar' })
  Email!: string;

  @Column({ type: 'varchar', nullable: false })
  Name!: string;

  @Column({ type: 'varchar', nullable: false })
  Country!: string;
}
