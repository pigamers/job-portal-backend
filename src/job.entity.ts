import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export enum JobType {
  FULL_TIME = 'Full-time',
  PART_TIME = 'Part-time',
  CONTRACT = 'Contract',
  INTERNSHIP = 'Internship',
}

@Entity('jobs')
export class Job {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  company: string;

  @Column()
  location: string;

  @Column({
    type: 'enum',
    enum: JobType,
  })
  jobType: JobType;

  @Column()
  salaryRange: string;

  @Column('text')
  description: string;

  @Column('text')
  requirements: string;

  @Column('text')
  responsibilities: string;

  @Column('date')
  applicationDeadline: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}