import { ajax } from "../tools/ajax";

export const getCities = async countryCode => {
  const optionsRequest = {
    method: "GET",
    url: "https://spott.p.rapidapi.com/places",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_rapidApiKey,
      "X-RapidAPI-Host": "spott.p.rapidapi.com",
    },
    params: {
      limit: 100,
      country: countryCode ?? "US",
      type: "CITY",
    },
  };
  return await ajax(optionsRequest);
};