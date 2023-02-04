import { ajax } from "../tools/ajax";

export const getCityWeather = async (city) => {
    const optionsRequest = {
        method: "GET",
        url: "https://api.openweathermap.org/data/2.5/weather",
        
        params: {
            q: city,
            appid: import.meta.env.VITE_openWeatherApiKey,
            units: "metric",
            lang: "es",
        },
    };
    return await ajax(optionsRequest);
};