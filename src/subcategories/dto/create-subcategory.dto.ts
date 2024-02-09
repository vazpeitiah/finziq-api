import { ApiProperty } from '@nestjs/swagger'

export class CreateSubcategoryDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  categoryId: string
}
