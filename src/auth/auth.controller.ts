import { Body, Controller, HttpCode, Post } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthDto } from './dto/auth.dto'
import { TokenDto } from './dto/token.dto'

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(200)
  @Post('register')
  async register(@Body() dto: AuthDto) {
    return await this.authService.register(dto)
  }

  @HttpCode(200)
  @Post('login')
  async login(@Body() dto: AuthDto) {
    return await this.authService.login(dto)
  }

  @HttpCode(200)
  @Post('login/access-token')
  async updateToken(@Body() dto: TokenDto) {
    return await this.authService.updateToken(dto)
  }
}
