import styled, { ThemeProvider } from 'styled-components'
import Filter from './components/Filter'
import Header from './components/Header'
import Pagination from './components/Pagination'
import useThemeMode from './hooks/useThemeMode'
import GlobalStyles from './styles/GlobalStyles'
import { dark, light } from './styles/Theme'
function App() {
  const [theme, toggleTheme] = useThemeMode()
  return (
    <>
      <GlobalStyles theme={theme === 'dark' ? dark : light} />
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <Contaier>
          <Filter />
          <Pagination />
        </Contaier>
      </ThemeProvider>
    </>
  )
}

export default App

const Contaier = styled.main`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
`
