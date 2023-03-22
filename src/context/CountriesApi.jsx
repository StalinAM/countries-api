import React, { createContext, useEffect, useState } from 'react'

export const ApiContext = createContext()

function CountriesApi({ children }) {
  const [countries, setCountries] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(50)
  const url = 'https://restcountries.com/v3.1/all'
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
  }, [])

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = countries?.slice(indexOfFirstItem, indexOfLastItem)

  const totalPages = Math.ceil((countries?.length || 0) / itemsPerPage)
  return (
    <ApiContext.Provider
      value={{
        countries: currentItems,
        currentPage,
        totalPages,
        setCurrentPage,
        setItemsPerPage
      }}
    >
      {children}
    </ApiContext.Provider>
  )
}

export default CountriesApi
