import React, { useContext, lazy, Suspense } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { ApiContext } from '../context/CountriesApi'

const ImagenFlag = lazy(() => import('./Flag'))

function Cards({ countries }) {
  const { setWordFilter } = useContext(ApiContext)
  const navigate = useNavigate()
  function handleClick(id) {
    navigate(`/countrie/${id}`)
    setWordFilter('a')
  }
  return (
    <>
      {countries?.map((item) => (
        <li
          key={item.cca3}
          onClick={() => handleClick(item.cca3.toLowerCase())}
        >
          <Card>
            <Suspense fallback={<div>Cargando...</div>}>
              <ImagenFlag
                src={item.flags.svg}
                alt={
                  item.flags.alt
                    ? item.flags.alt
                    : `The flag of ${item.name.common}`
                }
              />
            </Suspense>
            <Content>
              <h2>{item.name.common}</h2>
              <Description>
                <p>
                  Population:
                  <span> {item.population}</span>
                </p>
                <p>
                  Region:
                  <span> {item.region}</span>
                </p>
                <p>
                  Capital:
                  {<span> {item.capital?.[0]}</span>}
                </p>
              </Description>
            </Content>
          </Card>
        </li>
      ))}
    </>
  )
}

export default Cards

const Card = styled.article`
  width: 275px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 9px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 1rem;
  h2 {
    font-weight: 800;
    font-size: 1.25rem;
    color: ${(props) => props.theme.text};
  }
`
const Description = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.text};
    font-weight: 600;
    span {
      color: ${(props) => props.theme.input};
      font-weight: 300;
    }
  }
`
