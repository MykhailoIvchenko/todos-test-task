const apiRequest = async (BASE_URL, url = '', options) => {
  let response;

  if (options) {
    response = await fetch(`${BASE_URL}${url}`, options);
  } else {
    response = await fetch(`${BASE_URL}${url}`);
  }

  if (!response.ok) {
    throw new Error(`${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export const apiService = {apiRequest};
