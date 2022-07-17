import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes'
import { AppContextProvider } from './share'

const App = () => {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App
