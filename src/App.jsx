import Footer from "./components/Footer"
import Header from "./components/Header"
import Routes from "./Routes"
import GlobalStyle from "./styleGlobal/GlobalStyle"
//import "./Global.css" usa css ou usar styledcomponets

function App() {


  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Routes />
      <Footer/>
    </div>
  )
}

export default App
