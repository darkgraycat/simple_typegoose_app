export enum STATUS_CODE {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  NOT_ALLOWED = 405,
  SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
}

export const PORT = 2000;
export const USER_NAME = 'root';
export const USER_PASSWORD = 'root1234';
export const MONGODB_URL = `mongodb+srv://${USER_NAME}:${USER_PASSWORD}@sstypegoosecluster.foisl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

export const PAGE_LIMIT = 10;
