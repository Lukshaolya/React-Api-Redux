export const getApiResourse = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok) {
      console.error("Wow, opps", res.status);
      return false;
    }

    return await res.json();
  } catch (error) {
    console.error("Oops.", error.message);
  }
};
