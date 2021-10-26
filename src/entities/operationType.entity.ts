import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Operation } from './operation.entity';

@Entity('operations_type')
export class OperationType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @OneToMany(() => Operation, (operation) => operation.operationType)
  operations: Operation[];
}
