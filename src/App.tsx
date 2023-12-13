import { Pages } from '@/pages'

import { AppContextProvider } from '@/context/app.context'

import './App.scss'

function App() {
  return (
    <AppContextProvider>
      <Pages />
    </AppContextProvider>
  )
}

export default App
