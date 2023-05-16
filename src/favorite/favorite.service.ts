import { PrismaService } from './../../prisma.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FavoriteService {
    constructor(private prisma: PrismaService) { }

}
