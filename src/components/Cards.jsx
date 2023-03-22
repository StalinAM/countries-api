import React from 'react'
import styled from 'styled-components'

function Cards({ countries }) {
  return (
    <>
      {countries?.map((item) => (
        <Card key={item.cca3}>
          <img src={item.flags.svg} alt={item.flags.alt} />
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
                {<span> {item.capital ? item.capital[0] : ''}</span>}
              </p>
            </Description>
          </Content>
        </Card>
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
