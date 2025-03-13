import { IsString, IsNumber, IsBoolean, IsOptional, IsArray } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  breed: string;

  @IsNumber()
  age: number;

  @IsString()
  description: string;

  @IsBoolean()
  @IsOptional()
  isAdopted?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
} 