import { PAGE_LIMIT } from '../common/constants';
import { File, FileModel } from './file.model';

export default class FileService {
  public static async getByName(name: string): Promise<File[]> {
    return await FileModel.find({ name });
  }

  public static async getAll(page: number = 1): Promise<File[]> {
    return await FileModel
      .find({})
      .skip((page - 1) * PAGE_LIMIT)
      .limit(PAGE_LIMIT);
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
