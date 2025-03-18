import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ description: 'Name of the product', example: 'Laptop' })
  name: string;

  @ApiProperty({ description: 'Color of the product', example: 'Black', required: false })
  color?: string;

  @ApiProperty({ description: 'Price of the product', example: 1000, minimum: 0 })
  price: number;
}
