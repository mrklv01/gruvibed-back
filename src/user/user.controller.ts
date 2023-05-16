import { PasswordDto } from './dto/password.dto'
import { Body, Controller, Get, HttpCode, Param, Patch, Put, UseGuards } from '@nestjs/common'
import { Delete, Post } from '@nestjs/common/decorators'
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard'
import { Auth } from 'src/decorators/auth.decorator'
import { CurrentUser } from 'src/decorators/user.decorator'
import { UserDto } from './dto/user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('profile')
  @Auth('user')
  async getProfile(@CurrentUser('id') id: number) {
    return await this.userService.getById(id)
  }

  @HttpCode(200)
  @Put('profile/update')
  @Auth('user')
  async updateProfile(@CurrentUser('id') id: number, @Body() dto: UserDto) {
    return await this.userService.updateProfile(id, dto)
  }

  @HttpCode(200)
  @Auth('user')
  @Post('profile/favorite/:productId')
  async toggleFavorite(@CurrentUser('id') id: number, @Param('productId') productId: string) {
    return await this.userService.toggleFavorite(id, +productId)
  }

  //Админка

  @Get('admin/profile/:id')
  @Auth('admin')
  async getProfileById(@Param('id') id: number) {
    return await this.userService.getById(+id)
  }
  @Auth('admin')
  @Delete('admin/delete/:id')
  async deleteUser(@Param('id') id: number) {
    return await this.userService.deleteUser(+id)
  }

  @Auth('admin')
  @Get('admin/count')
  async getCount() {
    return await this.userService.count()
  }

  @Auth('admin')
  @Get('admin/all')
  async getAll() {
    return await this.userService.getAll()
  }

  @Auth('admin')
  @Put('admin/updateAccount/:id')
  async updateUser(@Param('id') id: number, @Body() dto: UserDto) {
    return await this.userService.updateUser(dto, +id)
  }
}
