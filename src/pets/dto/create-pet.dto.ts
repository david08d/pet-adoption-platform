import { IsString, IsNumber, IsOptional, IsBoolean, IsArray } from 'class-validator';

export class CreatePetDto {
  @IsString()
  name: string;

  @IsString()
  type: string;

  @IsString()
  breed: string;

  @IsNumber()
  @IsOptional()
  age?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsBoolean()
  @IsOptional()
  isAdopted?: boolean;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images?: string[];
} 