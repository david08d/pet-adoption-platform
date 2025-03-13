import { IsEmail, IsString, MinLength } from 'class-validator'

export class RegisterDto {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(6)
  password: string

  @IsString()
  name: string

  @IsString()
  role: string
}

export class LoginDto {
  @IsEmail()
  email: string

  @IsString()
  password: string
} 