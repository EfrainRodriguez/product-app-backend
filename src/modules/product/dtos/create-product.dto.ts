import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
  IsNumber,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({
    name: 'name',
    description: 'The name of the product',
    example: 'Product 1',
  })
  @IsString()
  @MinLength(3)
  name: string;

  @ApiProperty({
    name: 'description',
    description: 'The description of the product',
    example: 'This is the product 1',
  })
  @IsOptional()
  @IsString()
  description: string;

  @ApiProperty({
    name: 'category',
    description: 'The category of the product',
    example: 'Category 1',
  })
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  category: string;

  @ApiProperty({
    name: 'rating',
    description: 'The rating of the product (1-5)',
    example: 4,
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @ApiProperty({
    name: 'price',
    description: 'The price of the product',
    example: 100,
  })
  @IsNumber()
  @Min(0)
  price: number;

  @ApiProperty({
    name: 'stock',
    description: 'The stock of the product',
    example: 10,
  })
  @IsOptional()
  @IsNumber()
  @Min(0)
  stock: number;

  @ApiProperty({
    name: 'image',
    description: 'The image of the product',
    example: 'https://picsum.photos/200/300',
  })
  @IsString()
  image: string;
}
