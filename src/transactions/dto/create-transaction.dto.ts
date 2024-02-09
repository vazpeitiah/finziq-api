import { ApiProperty } from '@nestjs/swagger'
import { TransactionType } from '@prisma/client'

export class CreateTransactionDto {
  @ApiProperty()
  accountId: string
  @ApiProperty()
  subcategoryId: string
  @ApiProperty()
  amount: number
  @ApiProperty()
  date: Date
  @ApiProperty()
  description: string
  @ApiProperty()
  type: TransactionType
}
