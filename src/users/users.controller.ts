import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete
} from '@nestjs/common'
import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger'
import { UserEntity } from './entities/user.entity'

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiCreatedResponse({ type: UserEntity })
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto)
  }

  @ApiOkResponse({ type: UserEntity, isArray: true })
  @Get()
  findAll() {
    return this.usersService.findAll()
  }

  @ApiOkResponse({ type: UserEntity })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id)
  }

  @ApiOkResponse({ type: UserEntity })
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto)
  }

  @ApiOkResponse({ type: UserEntity })
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }
}
