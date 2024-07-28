import { ApiProperty } from '@nestjs/swagger'
import { User } from '@prisma/client'

export class UserEntity implements User {
  @ApiProperty()
  id: string
  @ApiProperty()
  name: string
  @ApiProperty()
  email: string
  @ApiProperty()
  password: string
  @ApiProperty()
  active: boolean
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}
