import { Controller, Post, Body, UseGuards, Get } from '@nestjs/common'
import { DonationsService } from './donations.service'
import { CreateDonationDto } from './dto/create-donation.dto'
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'
import { RolesGuard } from '../auth/guards/roles.guard'
import { Roles } from '../auth/decorators/roles.decorator'

@Controller('donations')
export class DonationsController {
  constructor(private readonly donationsService: DonationsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async create(@Body() createDonationDto: CreateDonationDto) {
    return this.donationsService.create(createDonationDto)
  }

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin', 'staff')
  async findAll() {
    return this.donationsService.findAll()
  }
} 