import { Controller, Get, Post, Body, Param, Delete, ValidationPipe } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './create-job.dto';
import { Job } from './job.entity';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) {}

  @Post()
  create(@Body(ValidationPipe) createJobDto: CreateJobDto): Promise<Job> {
    return this.jobsService.create(createJobDto);
  }

  @Get()
  findAll(): Promise<Job[]> {
    return this.jobsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Job | null> {
    return this.jobsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.jobsService.remove(+id);
  }
}