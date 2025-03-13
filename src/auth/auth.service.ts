import { Injectable, UnauthorizedException } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import * as crypto from 'crypto'
import { User, UserDocument } from '../users/schemas/user.schema'
import { RegisterDto, LoginDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = crypto
      .createHash('sha256')
      .update(registerDto.password)
      .digest('hex')
    
    const user = new this.userModel({
      ...registerDto,
      password: hashedPassword,
    })
    const savedUser = await user.save()
    
    const payload = { email: savedUser.email, sub: savedUser._id, role: savedUser.role }
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: savedUser._id,
        email: savedUser.email,
        name: savedUser.name,
        role: savedUser.role,
      }
    }
  }

  async login(loginDto: LoginDto) {
    const user = await this.userModel.findOne({ email: loginDto.email })
    if (!user) {
      throw new UnauthorizedException('Неправильний email або пароль')
    }

    const hashedPassword = crypto
      .createHash('sha256')
      .update(loginDto.password)
      .digest('hex')

    if (hashedPassword !== user.password) {
      throw new UnauthorizedException('Неправильний email або пароль')
    }

    const payload = { email: user.email, sub: user._id, role: user.role }
    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
        role: user.role,
      }
    }
  }

  private generateToken(user: UserDocument) {
    const payload = { email: user.email, sub: user._id, role: user.role }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }
}
