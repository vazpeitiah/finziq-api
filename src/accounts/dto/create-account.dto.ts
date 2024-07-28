import { ApiProperty } from '@nestjs/swagger'
import { AccountType } from '@prisma/client'

export class CreateAccountDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  includeInTotal: boolean
  @ApiProperty()
  type: AccountType
  @ApiProperty()
  userId: string
}
