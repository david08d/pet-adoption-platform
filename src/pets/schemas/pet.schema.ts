import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  breed: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  description: string;

  @Prop({ default: false })
  isAdopted: boolean;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ type: String, ref: 'User' })
  adoptedBy: string;

  @Prop({ type: Date })
  adoptionDate: Date;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet); 