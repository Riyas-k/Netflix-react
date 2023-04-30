import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import './App.css';
import {Actions,Originals,Comedy,Horror, Romance, Documentaries} from './urls'
import Rowpost from "./Components/Rowpost/Rowpost";

function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Rowpost url={Actions} name="Netflix Originals"/>
    <Rowpost url={Originals} name="Actions" isSmall/>
    <Rowpost url={Comedy} name="Comedy" isSmall/>
    <Rowpost url={Horror} name="Horror" isSmall/>
    <Rowpost url={Romance} name="Romance" isSmall/>
    <Rowpost url={Documentaries} name="Documentaries" isSmall/>

    </>
  )
}

export default App
