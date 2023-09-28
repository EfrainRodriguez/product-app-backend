import { ApiProperty } from '@nestjs/swagger';

export class ResponseProductDto {
  @ApiProperty({
    name: 'name',
    description: 'The name of the product',
    example: 'Product 1',
  })
  name: string;

  @ApiProperty({
    name: 'description',
    description: 'The description of the product',
    example: 'This is the product 1',
  })
  description: string;

  @ApiProperty({
    name: 'category',
    description: 'The category of the product',
    example: 'Category 1',
  })
  category: string;

  @ApiProperty({
    name: 'rating',
    description: 'The rating of the product (1-5)',
    example: 4,
  })
  rating: number;

  @ApiProperty({
    name: 'price',
    description: 'The price of the product',
    example: 100,
  })
  price: number;

  @ApiProperty({
    name: 'stock',
    description: 'The stock of the product',
    example: 100,
  })
  stock: number;

  @ApiProperty({
    name: 'sku',
    description: 'The sku of the product',
    example: 'SKU-123',
  })
  sku: string;

  @ApiProperty({
    name: 'image',
    description: 'The image of the product',
    example: 'https://picsum.photos/200/300',
  })
  image: string;

  @ApiProperty({
    name: '_id',
    description: 'The id of the product',
    example: '1',
  })
  _id: string;

  @ApiProperty({
    name: 'createdAt',
    description: 'The createdAt of the product',
    example: '2021-07-20T18:00:00.000Z',
  })
  createdAt: string;

  @ApiProperty({
    name: 'updatedAt',
    description: 'The updatedAt of the product',
    example: '2021-07-20T18:00:00.000Z',
  })
  updatedAt: string;
}
