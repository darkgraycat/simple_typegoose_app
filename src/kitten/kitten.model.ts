import { getModelForClass, prop } from '@typegoose/typegoose';

export class Kitten {
  @prop()
  public name: string;

  @prop()
  public species?: string;

}

export const KittenModel = getModelForClass(Kitten);
