import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Shelter, ShelterDocument } from './schemas/shelter.schema';
import { CreateShelterDto } from './dto/create-shelter.dto';

@Injectable()
export class SheltersService {
  constructor(
    @InjectModel(Shelter.name) private shelterModel: Model<ShelterDocument>,
  ) {}

  async create(createShelterDto: CreateShelterDto): Promise<Shelter> {
    const createdShelter = new this.shelterModel(createShelterDto);
    return createdShelter.save();
  }

  async findAll(): Promise<Shelter[]> {
    return this.shelterModel.find().exec();
  }

  async findOne(id: string): Promise<Shelter | null> {
    return this.shelterModel.findById(id).exec();
  }

  async update(id: string, updateShelterDto: Partial<CreateShelterDto>): Promise<Shelter | null> {
    return this.shelterModel
      .findByIdAndUpdate(id, updateShelterDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Shelter | null> {
    return this.shelterModel.findByIdAndDelete(id).exec();
  }
} 