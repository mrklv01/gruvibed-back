import { Controller, Get } from '@nestjs/common'
import { CityService } from './city.service'

@Controller('city')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Get('all')
  async getAll() {
    return await this.cityService.getAll()
  }
}
