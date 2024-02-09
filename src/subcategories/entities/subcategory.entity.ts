import { ApiProperty } from '@nestjs/swagger'
import { Subcategory } from '@prisma/client'

export class SubcategoryEntity implements Subcategory {
  @ApiProperty()
  id: string
  @ApiProperty()
  name: string
  @ApiProperty()
  categoryId: string
  @ApiProperty()
  active: boolean
  @ApiProperty()
  createdAt: Date
  @ApiProperty()
  updatedAt: Date
}
