import { Injectable } from '@nestjs/common'
import { PrismaService } from 'prisma.service'

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.city.findMany()
  }
}
