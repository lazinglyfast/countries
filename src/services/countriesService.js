import axios from "axios"
const api_key = import.meta.env.VITE_API_KEY

const list = () => {
  return axios
    .get("https://studies.cs.helsinki.fi/restcountries/api/all")
    .then(response => response.data)
}

const get = countryName => {
  return axios
    .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${countryName}`)
    .then(response => response.data)
}

const weather = ([lat, lon]) => {
  const baseUrl = "https://api.openweathermap.org/data/2.5/weather"
  const exclude = "minutely,hourly,daily,alerts"
  return axios
    .get(`${baseUrl}?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${api_key}&units=metric`)
    .then(response => response.data)
}

export default { list, get, weather }
