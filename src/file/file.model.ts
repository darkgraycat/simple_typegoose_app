import { getModelForClass, prop } from '@typegoose/typegoose';

export class File {
  @prop()
  public name: string;

  @prop()
  public path: string;

  @prop()
  public type: string;

  @prop()
  public createdAt?: Date;

}

export const FileModel = getModelForClass(File);
