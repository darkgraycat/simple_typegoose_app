import { getModelForClass, prop, ReturnModelType } from '@typegoose/typegoose';
import { Model } from 'mongoose';

export class Kitten {
  @prop()
  public name: string;

  @prop()
  public species?: string;

}

export const KittenModel = getModelForClass(Kitten);
