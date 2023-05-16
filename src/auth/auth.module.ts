import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaService } from './../../prisma.service';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { getJWTConfig } from 'src/config/jwt.config';
import { JwtStrategy } from 'src/strategies/jwt.strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, PrismaService, JwtStrategy],
  imports: [
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getJWTConfig
    })
  ]
})
export class AuthModule { }
