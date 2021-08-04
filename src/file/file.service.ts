import { File, FileModel } from './file.model';

export default class FileService {
  public static async getByName(name: string): Promise<File[]> {
    return await FileModel.find({ name });
  }

  public static async getAll(): Promise<File[]> {
    return await FileModel.find({});
  }

  public static create(name: string, path: string, content: string): Promise<File> {
    return FileModel.create({
      name,
      path,
      content,
      createdAt: new Date()
    } as File);
  }

}
