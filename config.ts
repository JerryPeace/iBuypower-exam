export const NODE_ENV = process.env.NODE_ENV;
export const NEXT_PUBLIC_BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || 'iBuypower';
export const NEXT_CLIENT_API_PATH = process.env.NEXT_CLIENT_API_PATH || `${NEXT_PUBLIC_BASE_PATH}/api/v1`;

export const config = {
  NEXT_CLIENT_API_PATH,
  NEXT_PUBLIC_BASE_PATH,
  NODE_ENV,
};

export default config;
