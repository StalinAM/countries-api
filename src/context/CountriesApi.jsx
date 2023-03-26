import React, { createContext, useMemo, useEffect, useState } from 'react'

export const ApiContext = createContext()

function CountriesApi({ children }) {
  const [countries, setCountries] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(50)
  const [region, setRegion] = useState('')
  const [wordFilter, setWordFilter] = useState('')

  const url = useMemo(() => {
    return `https://restcountries.com/v3.1/${
      region === '' || region === 'all' ? 'all' : `region/${region}`
    }`
  }, [region])

  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setCountries(data)
      } catch (error) {
        console.log(error)
      }
    }
    loadData()
  }, [url])

  const filteredCountries = useMemo(() => {
    if (!wordFilter) {
      return countries?.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    }

    return countries.filter(
      (country) =>
        country.name.common.toLowerCase().includes(wordFilter.toLowerCase()) ||
        country.capital?.[0]?.toLowerCase().includes(wordFilter.toLowerCase())
    )
  }, [countries, currentPage, itemsPerPage, wordFilter])

  const totalPages = Math.ceil((countries?.length || 0) / itemsPerPage)
  return (
    <ApiContext.Provider
      value={{
        countries: filteredCountries,
        currentPage,
        totalPages,
        setCurrentPage,
        setItemsPerPage,
        setRegion,
        region,
        wordFilter,
        setWordFilter
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export default CountriesApi
