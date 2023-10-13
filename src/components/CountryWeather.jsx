import { PropTypes } from "prop-types"

const CountryWeather = ({ countryDetails }) => {
  if (countryDetails === null) {
    return null
  }

  return (
    <div>
      <h2>Weather in {countryDetails.name.common}</h2>
      <p>temperature: {countryD}</p>
      <ul>{countryDetails.capital.map(c => <li key={c}>{c}</li>)}</ul>
      <p>area: {countryDetails.area} km<sup>2</sup></p>
      <h3>languages:</h3>
      <ul>
        {Object.values(countryDetails.languages).map((v) => <li key={v}>{v}</li>)}
      </ul>
      <img src={countryDetails.flags.png} />
    </div>
  )
}

CountryDetails.propTypes = {
  countryDetails: PropTypes.shape({
    name: PropTypes.shape({
      common: PropTypes.string,
    }),
    capital: PropTypes.arrayOf(PropTypes.string),
    area: PropTypes.number,
    languages: PropTypes.object,
    flags: PropTypes.shape({
      png: PropTypes.string,
    }),
  })
}

export default CountryDetails
