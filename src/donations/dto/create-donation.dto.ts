import { IsNumber, IsString, IsBoolean, IsOptional } from 'class-validator'

export class CreateDonationDto {
  @IsNumber()
  amount: number

  @IsString()
  currency: string

  @IsString()
  adoptionCenter: string

  @IsBoolean()
  @IsOptional()
  isAnonymous?: boolean
} 