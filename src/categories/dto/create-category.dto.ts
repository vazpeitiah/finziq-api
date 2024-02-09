import { ApiProperty } from '@nestjs/swagger'
import { TransactionType } from '@prisma/client'

export class CreateCategoryDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  type: TransactionType
}
