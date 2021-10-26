import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinTable,
} from 'typeorm';
import { OperationType } from './operationType.entity';

@Entity('operations')
export class Operation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  type: string;

  @Column()
  amount: number;

  @Column()
  concept: string;

  @Column('date')
  date: Date;

  @ManyToOne(() => OperationType, (operationType) => operationType.operations)
  @JoinTable({ name: 'operation_type' })
  operationType: OperationType;
}
