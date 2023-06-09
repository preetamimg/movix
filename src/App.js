import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import {FetchDataFromApi} from './utils/api';
import { useSelector, useDispatch } from 'react-redux';
import {getApiConfiguration, getGenres} from './store/homeSlice';
import Home from './pages/home/Home';
import PageNotFound from './pages/404/PageNotFound';
import Details from './pages/details/Details'
import ExploreMovie from './pages/explore/ExploreMovie'
import ExploreTv from './pages/explore/ExploreTv'
import ExploreGeneres from './pages/explore/ExploreGeneres'
import SearchResult from './pages/searchResult/SearchResult'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy'
import TermsOfUse from './pages/termsOfUse/TermsOfUse'
import AboutUs  from './pages/aboutUs/AboutUs';

function App() {
  // dispatch method action m data send krta h jis s wo store m save ho jyga
  const dispatch = useDispatch()

  // const {url} = useSelector((state) => state.home)
  const fetchApiConfig = ()=> {
    FetchDataFromApi('/configuration').then((res)=>{
      // console.log(res)
      const url = {
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

  const websiteName = 'MovieWalas'
  return (
    <>
    <Router>
      <Header/>
      <main>
      <Routes>
        <Route path='/' element={<Home websiteName={websiteName}/>}/>
        <Route path='/:mediaType/:id' element={<Details websiteName={websiteName}/>}/>
        <Route path='/search/:query' element={<SearchResult websiteName={websiteName}/>}/>
        <Route path='/movie' exact element={<ExploreMovie websiteName={websiteName}/>}/>
        <Route path='/tv' exact element={<ExploreTv websiteName={websiteName}/>}/>
        <Route path='/privacy-policy' exact element={<PrivacyPolicy websiteName={websiteName}/>}/>
        <Route path='/terms-and-conditions' exact element={<TermsOfUse websiteName={websiteName}/>}/>
        <Route path='/about-us' exact element={<AboutUs websiteName={websiteName}/>}/>
        <Route path='/:mediaType/gener/:genreName' element={<ExploreGeneres websiteName={websiteName}/>}/>
        {/* redirect routes */}
        <Route path='/person' element={<Navigate to="/"  websiteName={websiteName}/>}/>
        <Route path='/movie/gener' element={<Navigate to="/movie"  websiteName={websiteName}/>}/>
        <Route path='/tv/gener' element={<Navigate to="/tv"  websiteName={websiteName}/>}/>
        {/* star route */}
        <Route path='*' element={<PageNotFound websiteName={websiteName}/>}/>
      </Routes>
      </main>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
