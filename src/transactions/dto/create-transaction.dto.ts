import { ApiProperty } from '@nestjs/swagger'
import { TransactionType } from '@prisma/client'

export class CreateTransactionDto {
  @ApiProperty()
  accountId: string
  @ApiProperty({ required: false })
  destinationAccountId: string
  @ApiProperty({ required: false })
  subcategoryId: string
  @ApiProperty()
  amount: number
  @ApiProperty({
    description: 'The date of the transaction in the format YYYY-MM-DD',
    format: 'date'
  })
  date: Date
  @ApiProperty({ required: false })
  description: string
  @ApiProperty()
  type: TransactionType
  @ApiProperty()
  categoryId: string
}
