import { HTTP, HTTPS } from "../constants/api";

export const changeHTTP = (url) => {
  const res = url ? url.replace(HTTP, HTTPS) : url;
  return res;
}

export const getApiResourse = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Could not fetch.", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Oops.", error.message);
  }
};
