import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, SchemaTypes } from 'mongoose';

import { PRODUCT_MODEL_NAME } from './product.schema';

export const PRODUCT_MOVEMENT_MODEL_NAME = 'ProductMovement';

@Schema({
  timestamps: true,
})
export class ProductMovement extends Document {
  @Prop({
    type: Number,
    required: true,
  })
  oldPriceValue: number;

  @Prop({
    type: Number,
    required: true,
  })
  newPriceValue: number;

  @Prop({
    type: Number,
    required: true,
  })
  oldStockValue: number;

  @Prop({
    type: Number,
    required: true,
  })
  newStockValue: number;

  @Prop({
    type: SchemaTypes.ObjectId,
    ref: PRODUCT_MODEL_NAME,
  })
  product: string;
}

export const ProductMovementSchema =
  SchemaFactory.createForClass(ProductMovement);
