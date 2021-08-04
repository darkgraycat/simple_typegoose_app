import axios from 'axios';

import { File, FileModel } from './file.model';

export default class FileService {
  public static async getByName(name: string): Promise<File[]> {
    return await FileModel.find({ name });
  }

  public static async getAll(): Promise<File[]> {
    return await FileModel.find({});
  }

  public static async create(name: string, path: string, content: string): Promise<File> {
    return await FileModel.create({
      name,
      path,
      content,
      createdAt: new Date()
    } as File);
  }

  public static async isAdmin(id: string): Promise<boolean> {
    const response = await axios.get(`http://localhost:3000/users/isAdmin/${id}`);
    return response.data;
  }

}
