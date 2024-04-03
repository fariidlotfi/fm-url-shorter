
export async function shortURL(requestedURL) {
  const response = await fetch(
    "https://cors-anywhere.herokuapp.com/https://cleanuri.com/api/v1/shorten",
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ url: requestedURL }),
    }
  )
    .then((res) => res.json())
    .catch((err) => {
      throw new Error(err);
    });
  return response.result_url;
}
