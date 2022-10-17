import { getToken } from '@/helpers/appStorage';

export function headers() {
  if (getToken()) {
    return {
      'Accept' : 'application/json',
      "Content-Type": "application/json",
      'Authorization': getToken()
    };
  }
  return {
    'Accept' : 'application/json',
    "Content-Type": "application/json",
  };
}
