import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  Min,
  Max,
  IsNumber,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @MinLength(3)
  name: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsString()
  @MinLength(3)
  @MaxLength(30)
  category: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsNumber()
  @Min(0)
  price: number;

  @IsOptional()
  @IsNumber()
  @Min(0)
  stock: number;

  @IsString()
  image: string;
}
