import Sidebar from './components/Sidebar'
import Posts from './components/Posts'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <div className="layout">
        <Sidebar />
        <main className="content">
          <Posts />
          <Projects />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
