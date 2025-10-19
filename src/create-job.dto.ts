import { IsString, IsEnum, IsDateString, IsNotEmpty } from 'class-validator';
import { JobType } from './job.entity';

export class CreateJobDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  company: string;

  @IsString()
  @IsNotEmpty()
  location: string;

  @IsEnum(JobType)
  jobType: JobType;

  @IsString()
  @IsNotEmpty()
  salaryRange: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  requirements: string;

  @IsString()
  @IsNotEmpty()
  responsibilities: string;

  @IsDateString()
  applicationDeadline: string;
}