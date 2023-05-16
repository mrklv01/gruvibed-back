import { PrismaService } from './../prisma.service'
import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from '@nestjs/config'
import { UserModule } from './user/user.module'
import { FavoriteModule } from './favorite/favorite.module'
import { CategoryModule } from './category/category.module'
import { ProductModule } from './product/product.module'
import { OrderModule } from './order/order.module'
import { ManufacturerModule } from './manufacturer/manufacturer.module'
import { CityModule } from './city/city.module'
import { FilesModule } from './files/files.module'
import { MulterModule } from '@nestjs/platform-express'

@Module({
  imports: [
    ConfigModule.forRoot(),
    FilesModule,
    MulterModule.register({
      dest: './uploads',
    }),
    AuthModule,
    UserModule,
    FavoriteModule,
    CategoryModule,
    ProductModule,
    OrderModule,
    ManufacturerModule,
    CityModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
