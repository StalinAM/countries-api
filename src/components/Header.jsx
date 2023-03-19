import React from 'react'
import styled from 'styled-components'

function Header({ theme, toggleTheme }) {
  return (
    <Container>
      <h1>Where in the world?</h1>
      <Theme onClick={toggleTheme}>
        {theme === 'dark' ? (
          <>
            <i className='uil uil-sun' />
            <span>Ligh Mode</span>
          </>
        ) : (
          <>
            <i className='uil uil-moon' />
            <span>Dark Mode</span>
          </>
        )}
      </Theme>
    </Container>
  )
}

export default Header

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem;
  background-color: ${(props) => props.theme.elements};
  color: ${(props) => props.theme.text};
  h1 {
    font-size: 1rem;
    font-weight: 800;
  }
`
const Theme = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  color: ${(props) => props.theme.text};
  i {
    font-weight: 600;
    font-size: 1.1rem;
  }
  span {
    font-weight: 600;
    font-size: 0.875rem;
  }
`
