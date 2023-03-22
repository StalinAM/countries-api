import React, { useContext } from 'react'
import styled from 'styled-components'
import { ApiContext } from '../context/CountriesApi'
import Cards from './Cards'

function Pagination() {
  const { countries, currentPage, totalPages, setCurrentPage } =
    useContext(ApiContext)
  const handlePage = (page) => setCurrentPage(page)
  const renderPagination = () => {
    const pages = []
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => handlePage(i)}
          disabled={i === currentPage}
        >
          {i}
        </button>
      )
    }
    return pages
  }
  return (
    <Container>
      <Content>
        <Cards countries={countries} />
      </Content>
      <div>{renderPagination()}</div>
    </Container>
  )
}

export default Pagination

const Container = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
  @media screen and (min-width: 768px) {
    padding: 1rem 5rem;
  }
`
const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`
