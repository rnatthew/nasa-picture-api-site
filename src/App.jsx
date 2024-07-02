import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Main from "./components/Main"
import Sidebar from "./components/Sidebar"

function App() {
  const [showModal, setShowModal] = useState(false);
  const [nasaData, setNasaData] = useState();

  useEffect(() => {
    async function getNasaImg() {
      const apiKey = import.meta.env.VITE_NASA_API_KEY;
      const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${apiKey}`;
      try {
        const response = await fetch(url);
        const webData = await response.json();
        setNasaData(webData);
        setShowModal(true);
        console.log(nasaData);
      } 
      catch(err) {
        console.log('The following error occurred while fetching data from the NASA API:', err.message);
      }
    }
    getNasaImg();
  }, []);

  function handleToggleModal() {
    setShowModal(!showModal);
  }
  

  return (
    <>
      { nasaData ? <Main nasaData={nasaData}></Main> : 
      <div className="loadingScreen">
        <p>Your image is loading now...</p>
        <i className="fa-solid fa-gear"></i>
      </div> }
      { showModal && <Sidebar handleToggleModal={handleToggleModal} nasaData={nasaData} ></Sidebar> }
      { nasaData && <Footer handleToggleModal={handleToggleModal} nasaData={nasaData} ></Footer> }
    </>
  )
}

export default App
