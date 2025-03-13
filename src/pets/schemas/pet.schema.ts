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

  @Prop()
  age: number;

  @Prop()
  description: string;

  @Prop({ default: false })
  isAdopted: boolean;

  @Prop({ type: [String] })
  images: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const PetSchema = SchemaFactory.createForClass(Pet); 