import { ApiProperty } from '@nestjs/swagger'

export class CreateAccountDto {
  @ApiProperty()
  name: string
  @ApiProperty()
  includeInTotal: boolean
}
