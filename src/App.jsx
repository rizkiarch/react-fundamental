import { RouterProvider } from 'react-router-dom'
import './App.css'
import { GlobalContext } from './context'
import { router } from './routers'

function App() {
  const user = {
    username: "Ikay"
  }

  return (
    <>
      <div className='App'>
      <GlobalContext.Provider value={user} >
        <RouterProvider router={router}></RouterProvider>
      </GlobalContext.Provider>
      </div>
    </>
  )
}

export default App
