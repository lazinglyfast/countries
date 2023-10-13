import { PropTypes } from "prop-types"

const CountryNames = ({ countryNames, showCountry }) => {
  if (countryNames === null || countryNames.length === 1) {
    return null
  }

  if (countryNames.length > 10) {
    return <p>Too many matches, specify another filter</p>
  }

  return countryNames.map(countryName => {
    return <CountryName
      key={countryName}
      countryName={countryName}
      showCountry={showCountry} />

  })
}

CountryNames.propTypes = {
  countryNames: PropTypes.arrayOf(PropTypes.string),
  showCountry: PropTypes.func,
}

const CountryName = ({ countryName, showCountry }) => {
  return (
    <>
      <p>
        {countryName}
        <button onClick={() => { showCountry(countryName) }}>show</button>
      </p>
    </>
  )
}
CountryName.propTypes = {
  countryName: PropTypes.string,
  showCountry: PropTypes.func,
}

export default CountryNames
