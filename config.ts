export const NODE_ENV = process.env.NODE_ENV;
export const NEXT_CLIENT_API_PATH = process.env.NEXT_CLIENT_API_PATH || '/api/v1';

export const config = {
  NEXT_CLIENT_API_PATH,
  NODE_ENV,
};

export default config;
