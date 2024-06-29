const getCookie = (name: string) => {
  if (typeof window !== 'undefined') {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      return parts.pop()?.split(';').shift();
    }
  }
}

const hasAuthorized = () => {
  if (typeof window !== 'undefined') {
    return Boolean(getCookie('access_token'));
  }
  return false;
};

const checker = { hasAuthorized };

export default checker;
