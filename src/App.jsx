import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import useThemeMode from './hooks/useThemeMode'
import GlobalStyles from './styles/GlobalStyles'
import { dark, light } from './styles/Theme'
function App() {
  const [theme, toggleTheme] = useThemeMode()
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme === 'dark' ? dark : light}>
        <Header theme={theme} toggleTheme={toggleTheme} />
      </ThemeProvider>
    </>
  )
}

export default App
