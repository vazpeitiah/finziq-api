import { Account } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'

export class AccountEntity implements Account {
  @ApiProperty()
  id: string
  @ApiProperty()
  name: string
  @ApiProperty()
  includeInTotal: boolean
  @ApiProperty({ required: false, default: true })
  active: boolean
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}
