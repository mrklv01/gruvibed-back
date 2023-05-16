"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlyAdminGuard = void 0;
const common_1 = require("@nestjs/common");
class OnlyAdminGuard {
    constructor(reflector) {
        this.reflector = reflector;
    }
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (!user.isAdmin)
            throw new common_1.ForbiddenException('У вас нет прав администратора');
        return true;
    }
}
exports.OnlyAdminGuard = OnlyAdminGuard;
//# sourceMappingURL=admin.guard.js.map