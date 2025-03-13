import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Donation, DonationDocument } from './schemas/donation.schema'
import { CreateDonationDto } from './dto/create-donation.dto'

@Injectable()
export class DonationsService {
  constructor(
    @InjectModel(Donation.name)
    private donationModel: Model<DonationDocument>,
  ) {}

  async create(createDonationDto: CreateDonationDto) {
    const donation = new this.donationModel(createDonationDto)
    return donation.save()
  }

  async findAll() {
    return this.donationModel.find().exec()
  }
} 