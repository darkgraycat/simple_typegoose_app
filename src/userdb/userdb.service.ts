import axios from 'axios';
import { HOST, PORT } from './userdb.constants';

export default class UserDBService {
  public static async fetchIsAdmin(id: string): Promise<boolean> {
    return (await axios.get(`${HOST}:${PORT}/users/isAdmin/${id}`)).data
  }
}
