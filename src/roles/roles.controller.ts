import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('UserRoles')
@Controller('roles')
export class RolesController {
  constructor(private rolesServise: RolesService) {}
  @Post()
  create(@Body() dto: CreateRoleDto) {
    return this.rolesServise.createRole(dto);
  }

  @Get('/:value')
  getByValue(@Param('value') value: string) {
    return this.rolesServise.getRoleByValue(value);
  }
}
