import React from 'react'
import styled from 'styled-components'

function Filter() {
  return (
    <Container>
      <ContainerShearch>
        <i className='uil uil-search' />
        <InputF type='text' placeholder='Search for a country...' />
      </ContainerShearch>
      <ContainerFilter>
        <ContentFilter>
          <span>Filter by Region</span>
          <i className='uil uil-angle-down' />
        </ContentFilter>
        <Menu>
          <li>Africa</li>
          <li>America</li>
          <li>Asia</li>
          <li>Europe</li>
          <li>Oceania</li>
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
    color: ${(props) => props.theme.text};
    font-size: 0.875rem;
    font-weight: 600;
  }
  i {
    color: ${(props) => props.theme.text};
    font-size: 1.25rem;
  }
`
const Menu = styled.ul`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  padding: 10px 10px 10px 20px;
  border-radius: 8px;
  width: 200px;
  top: 52px;
  background-color: ${(props) => props.theme.elements};
  display: none;
  li {
    font-size: 0.875rem;
    font-weight: 600;
    color: ${(props) => props.theme.text};
  }
`
