import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { ApiContext } from '../context/CountriesApi'

function Filter({ setWordFilter }) {
  const { setRegion, region } = useContext(ApiContext)
  const [active, setActive] = useState(false)
  const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania']
  const handleRegion = (region) => {
    setRegion(region)
    setActive(false)
  }
  const handleChange = (event) => {
    setWordFilter(event.target.value)
  }
  return (
    <Container>
      <ContainerShearch>
        <i className='uil uil-search' />
        <InputF
          onChange={handleChange}
          type='text'
          placeholder='Search for a country...'
        />
      </ContainerShearch>
      <ContainerFilter>
        <ContentFilter>
          <span>{region ? region : 'Filter by region...'}</span>
          <i
            onClick={() => setActive(!active)}
            className='uil uil-angle-down'
          />
        </ContentFilter>
        <Menu show={active}>
          {regions.map((item, index) => (
            <li key={index} onClick={() => handleRegion(item.toLowerCase())}>
              {item}
            </li>
          ))}
        </Menu>
      </ContainerFilter>
    </Container>
  )
}

export default Filter

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  padding: 1.5rem 1rem;
  @media screen and (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    padding: 1.5rem 5rem;
  }
`
const ContainerShearch = styled.form`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: ${(props) => props.theme.elements};
  border-radius: 8px;
  padding: 10px 10px 10px 20px;
  i {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
  }
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
const InputF = styled.input`
  width: 100%;
  background: none;
  border: none;
  color: ${(props) => props.theme.text};
  &::placeholder {
    color: ${(props) => props.theme.input};
  }
`
const ContainerFilter = styled.div`
  width: 200px;
  position: relative;
`
const ContentFilter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  padding: 10px 10px 10px 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: ${(props) => props.theme.elements};
  span {
    text-transform: capitalize;
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    font-weight: 600;
  }
  i {
    cursor: pointer;
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
  }
`
const Menu = styled.ul`
  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 10px 10px;
  border-radius: 8px;
  width: 200px;
  top: 55px;
  background-color: ${(props) => props.theme.elements};

  li {
    cursor: pointer;
    padding: 5px 10px;
    font-size: 0.875rem;
    border-radius: 8px;
    font-weight: 600;
    color: ${(props) => props.theme.text};
    &:hover {
      background-color: ${(props) => props.theme.background};
    }
  }
`
