import { File, FileModel } from './file.model';

export default class FileService {
  public static async getByName(name: string): Promise<File[]> {
    return await FileModel.find({ name });
  }

  public static async getAll(): Promise<File[]> {
    return await FileModel.find({});
  }

  public static async create(name: string, path: string, type: string): Promise<File> {
    return await FileModel.create({
      name,
      path,
      type,
      createdAt: new Date()
    } as File);
  }

}
