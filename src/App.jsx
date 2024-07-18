import './App.css'
import Article from './components/Articles'

function App() {

  return (
    <>
      <div className='App'>
      <Article name="Ikay" titles={["Tutorial Reactjs", "Tutorial Nextjs", "Tutorial Nodejs"]} />
      <br />
      <Article name="Manto" titles={["Vuejs", "Nuxtjs"]} />
      </div>
    </>
  )
}

export default App
