import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type DonationDocument = Donation & Document

@Schema()
export class Donation {
  @Prop({ required: true })
  amount: number

  @Prop({ required: true })
  currency: string

  @Prop({ type: String, ref: 'User' })
  donor: string

  @Prop({ type: String, ref: 'AdoptionCenter' })
  adoptionCenter: string

  @Prop({ default: false })
  isAnonymous: boolean

  @Prop({ type: Date, default: Date.now })
  createdAt: Date
}

export const DonationSchema = SchemaFactory.createForClass(Donation) 