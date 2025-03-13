import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  password: string

  @Prop({ required: true })
  name: string

  @Prop({ required: true, enum: ['admin', 'staff', 'user'] })
  role: string

  @Prop({ default: false })
  isVerified: boolean

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const UserSchema = SchemaFactory.createForClass(User) 