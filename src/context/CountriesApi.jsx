import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext()

function CountriesApi({ children }) {
  const [countries, setCountries] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(50)
  const [region, setRegion] = useState('')
  const [wordFilter, setWordFilter] = useState('')

  const url = `https://restcountries.com/v3.1/${
    region === '' || region === 'all' ? 'all' : `region/${region}`
  }`
  async function loadData() {
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadData()
  }, [region, wordFilter])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = wordFilter
    ? countries
    : countries?.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil((countries?.length || 0) / itemsPerPage)
  return (
    <ApiContext.Provider
      value={{
        countries: currentItems,
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
