import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type AdoptionCenterDocument = AdoptionCenter & Document

@Schema()
export class AdoptionCenter {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  address: string

  @Prop({ required: true })
  phone: string

  @Prop({ required: true })
  email: string

  @Prop({ type: [String] })
  workingHours: string[]

  @Prop({ type: [String] })
  facilities: string[]

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const AdoptionCenterSchema = SchemaFactory.createForClass(AdoptionCenter) 