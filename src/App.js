import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss';
import {FetchDataFromApi} from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import {getApiConfiguration, getGenres} from './store/homeSlice';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details'
import Explore from './pages/explore/Explore'
import SearchResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {
  // dispatch method action m data send krta h jis s wo store m save ho jyga
  const dispatch = useDispatch()

  const {url} = useSelector((state) => state.home)
  const fetchApiConfig = ()=> {
    FetchDataFromApi('/configuration').then((res)=>{
      console.log(res)
      const url = {
        // backdrop_1280: res.images.secure_base_url + "w1280",
        // backdrop_780: res.images.secure_base_url + "w780",
        // backdrop_300: res.images.secure_base_url + "w300",
        // // mobPoster: res.images.secure_base_url + "w185",
        // poster: res.images.secure_base_url + "w342",
        // detailPoster: res.images.secure_base_url + "w500",
        // profile: res.images.secure_base_url + "w185",
        // profileDetail: res.images.secure_base_url + "h632",
      }
      for(let ele in res.images){
        if(Array.isArray(res.images[ele])){
            for(let data of res.images[ele]){
                url[`${ele}_${data}`] = `${res.images.base_url}${data}`
            }
        }
    // console.log(ele)
    }
    console.log(url)
      dispatch(getApiConfiguration(url))
    })
  }

  const genresCall = async ()=> {
    let promises = []
    let endPoints = ['movie', 'tv']
    let allGeneres = {}

    endPoints.forEach((url)=> {
      promises.push(FetchDataFromApi(`/genre/${url}/list`))
    })

    const data = await Promise.all(promises)
    // console.log(data)
    data.map(({genres})=> {
      return genres.map((item) => (allGeneres[item.id] = item))
    })
    dispatch(getGenres(allGeneres))
    // console.log(allGeneres)
  }

  useEffect(()=> {
    fetchApiConfig();
    genresCall()
  }, [])
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/:mediaType/:id' element={<Details/>}/>
        <Route path='/search/:query' element={<SearchResult/>}/>
        <Route path='/explore/:mediaType' element={<Explore/>}/>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
