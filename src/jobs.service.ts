import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Job } from './job.entity';
import { CreateJobDto } from './create-job.dto';

@Injectable()
export class JobsService {
  constructor(
    @InjectRepository(Job)
    private jobsRepository: Repository<Job>,
  ) {}

  async create(createJobDto: CreateJobDto): Promise<Job> {
    const combinedDescription = `${createJobDto.description}. ${createJobDto.responsibilities}. ${createJobDto.requirements}`;
    
    const job = this.jobsRepository.create({
      ...createJobDto,
      description: combinedDescription,
      applicationDeadline: new Date(createJobDto.applicationDeadline),
    });
    return this.jobsRepository.save(job);
  }

  async findAll(): Promise<Job[]> {
    return this.jobsRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Job | null> {
    return this.jobsRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.jobsRepository.delete(id);
  }
}