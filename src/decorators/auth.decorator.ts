import { applyDecorators, UseGuards } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'
import { TypeRole } from "src/auth/auth.interface";
import { OnlyAdminGuard } from "src/auth/guards/admin.guard";
import { JwtAuthGuard } from "src/auth/guards/jwt.guard";

export const Auth = (role: TypeRole = 'user') =>
    applyDecorators(
        role === 'admin' ? UseGuards(JwtAuthGuard, OnlyAdminGuard) : UseGuards(JwtAuthGuard),
    )