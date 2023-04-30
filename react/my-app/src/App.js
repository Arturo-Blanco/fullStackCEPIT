import { BrowserRouter, Routes, Route} from "react-router-dom";
import {createContext,useEffect, useState} from 'react'
import HomePage from "./Body/HomePage/homePage";
import Footer from "./Footer/footer";
import Header from "./Header/header";
import ImageGallery from "./ImageLibrary/imageGallery.jsx"
import {getData} from './Api/getApi.js'

export const DataContext = createContext([]);

function App() {
  const [data, setData] = useState([]);

    useEffect(() => {
    const fetchPhotos = async () => {
    const data = await getData();
    setData(data);
    };
    fetchPhotos();
    }, []);
    
  return (
    <DataContext.Provider value={{ data }}>
    <BrowserRouter>
      <div>
        <Header/>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/images' element={<ImageGallery/>}/>
            <Route path='/' element={<Footer/>}/>
          </Routes>
          <Footer/>
        </div>
    </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
