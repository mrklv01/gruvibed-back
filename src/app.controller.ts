import { Body, Controller, Get, HttpCode, Param, Patch, Put, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/decorators/user.decorator'

@Controller('')
export class AppController {
  constructor() {}
  @Get('')
  async getHello() {
    return {message: 'Profile'}
  }

}
