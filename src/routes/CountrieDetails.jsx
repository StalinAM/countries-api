import React, { useContext } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { ApiContext } from '../context/CountriesApi'

function CountrieDetails() {
  const { countries, setWordFilter } = useContext(ApiContext)
  const { id } = useParams()
  const navigate = useNavigate()

  function goBack() {
    navigate('/')
    setWordFilter('')
  }

  function getBorderCountrie(id) {
    const countrie = countries?.find((item) => item.cca3 === id)
    return countrie.name.common
  }

  const countrie = countries?.find((item) => item.cca3.toLowerCase() === id)

  function getNativeName(countrie) {
    const nativeName = countrie.name.nativeName
    const languageCode = Object.keys(countrie.languages)[0]
    return nativeName[languageCode].common
  }

  function getCurrencyName(countrie) {
    const currencyKey = Object.keys(countrie.currencies)[0]
    return countrie.currencies[currencyKey].name
  }
  return (
    <Container>
      <Back onClick={() => goBack()}>
        <i className='uil uil-arrow-left' />
        Back
      </Back>
      <Content>
        <img src={countrie.flags.svg} alt={countrie.flags.alt} />
        <ContainerDescription>
          <h2>{countrie.name.common}</h2>
          <Description>
            <Column>
              <p>
                Native Name: <span>{getNativeName(countrie)}</span>
              </p>
              <p>
                Population: <span>{countrie.population}</span>
              </p>
              <p>
                Region: <span>{countrie.region}</span>
              </p>
              <p>
                Sub Region: <span>{countrie.subregion}</span>
              </p>
              <p>
                Capital: <span>{countrie.capital?.[0]}</span>
              </p>
            </Column>
            <Column>
              <p>
                Top Level Domain: <span>{countrie.tld}</span>
              </p>
              <p>
                Currencies: <span>{getCurrencyName(countrie)}</span>
              </p>
              <p>
                Languages:{' '}
                <span>{Object.values(countrie.languages).join(', ')}</span>
              </p>
            </Column>
          </Description>
          <BorderC>
            <h3>Border Countries: </h3>
            <ListBorders>
              {countrie.borders?.map((item) => (
                <li key={item}>
                  <Link to={`/countrie/${item.toLowerCase()}`}>
                    {getBorderCountrie(item)}
                  </Link>
                </li>
              ))}
            </ListBorders>
          </BorderC>
        </ContainerDescription>
      </Content>
    </Container>
  )
}

export default CountrieDetails

const Container = styled.section`
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  @media screen and (min-width: 768px) {
    padding: 5rem;
  }
`
const Back = styled.button`
  width: fit-content;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  background-color: ${(props) => props.theme.elements};
  border-radius: 8px;
  padding: 5px 20px 5px 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  color: ${(props) => props.theme.text};
  i {
    font-size: 1.3rem;
  }
`
const Content = styled.article`
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  align-items: center;
  justify-content: space-around;
  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  @media screen and (min-width: 768px) {
    img {
      width: 560px;
      height: 300px;
    }
  }
`
const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${(props) => props.theme.text};
  h2 {
    font-size: 2rem;
  }
  @media screen and (min-width: 768px) {
    max-width: 70ch;
  }
`
const Description = styled.div`
  display: flex;
  gap: 3rem;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    gap: 4rem;
    flex-direction: row;
  }
`
const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  p {
    font-size: 0.975rem;
    color: ${(props) => props.theme.text};
    font-weight: 600;
    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme.input};
      font-weight: 300;
    }
  }
`
const BorderC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  h3 {
    font-size: 0.975rem;
  }
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
const ListBorders = styled.ul`
  display: flex;
  gap: 0.5rem;
  li {
    background-color: ${(props) => props.theme.elements};
    padding: 5px 15px;
    font-size: 0.875rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
`
