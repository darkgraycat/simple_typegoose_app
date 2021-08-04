import { getModelForClass, prop } from '@typegoose/typegoose';

export class File {
  @prop()
  public name: string;

  // @prop({ unique: true })
  @prop()
  public path: string;

  @prop()
  public content: string;

  @prop()
  public createdAt?: Date;

}

export const FileModel = getModelForClass(File);
