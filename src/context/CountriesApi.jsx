import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext()

function CountriesApi({ children }) {
  const [countries, setcountries] = useState()
  const url = 'https://restcountries.com/v3.1/all'
  async function loadData() {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setcountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [])
  return (
    <ApiContext.Provider value={{ countries }}>{children}</ApiContext.Provider>
  )
}

export default CountriesApi
