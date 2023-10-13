import { useState, useEffect } from 'react'
import countriesService from "../services/countriesService"

export const useCountry = (countryName) => {
  const [countryDetails, setCountryDetails] = useState(null)

  useEffect(() => {
    if (countryName === null) {
      setCountryDetails(null)
      return
    }
    countriesService
      .get(countryName)
      .then((fromServerCountryDetails) => {
        countriesService
          .weather(fromServerCountryDetails.latlng)
          .then((weather) => {
            const icon = weather.weather[0].icon
            setCountryDetails({
              ...fromServerCountryDetails,
              temperature: weather.main.temp,
              wind: weather.wind.speed,
              icon: `https://openweathermap.org/img/wn/${icon}@2x.png`,

            })
          })
      })
  }, [countryName])

  return {
    countryDetails
  }
}
