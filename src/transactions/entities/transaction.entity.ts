import { ApiProperty } from '@nestjs/swagger'
import { Transaction, TransactionType } from '@prisma/client'

export class TransactionEntity implements Transaction {
  @ApiProperty()
  id: string
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
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}
