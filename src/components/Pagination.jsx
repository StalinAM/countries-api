import React, { useContext } from 'react'
import styled from 'styled-components'
import { ApiContext } from '../context/CountriesApi'
import Cards from './Cards'

function Pagination() {
  const { countries, currentPage, totalPages, setCurrentPage, wordFilter } =
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
  const newCountries = countries?.filter((countrie) =>
    countrie.name.common.toLowerCase().includes(wordFilter)
  )
  return (
    <Container>
      {!wordFilter && <ContainerPages>{renderPagination()}</ContainerPages>}
      <Content>
        <Cards countries={wordFilter ? newCountries : countries} />
      </Content>
      {!wordFilter && <ContainerPages>{renderPagination()}</ContainerPages>}
    </Container>
  )
}

export default Pagination

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 2rem;
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
const ContainerPages = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.elements};
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    color: ${(props) => props.theme.text};
    font-weight: 600;
    &:disabled {
      background-color: ${(props) => props.theme.background};
      color: ${(props) => props.theme.input};
      font-weight: 300;
    }
  }
`
