import { Category, TransactionType } from '@prisma/client'
import { ApiProperty } from '@nestjs/swagger'

export class CategoryEntity implements Category {
  @ApiProperty()
  id: string
  @ApiProperty()
  name: string
  @ApiProperty()
  type: TransactionType
  @ApiProperty({ required: false, default: true })
  active: boolean
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}
