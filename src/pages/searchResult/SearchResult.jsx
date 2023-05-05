import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import InfiniteScroll from 'react-infinite-scroll-component'
import {FetchDataFromApi} from './../../utils/api'
import noResults from './../../assets/img/no-results.png'
import Spinner from '../../components/spinner/Spinner'
import './style.scss'
import MovieCard from '../../components/movieCard/MovieCard'
const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const {query} = useParams();

  // console.log(pageNum)

const fetchInitialData = ()=> {
  setLoading(true)
  FetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=> {
    setData(res)
    // console.log('fetchinitialdata')
    setPageNum((prev) => prev + 1)
    setLoading(false)
  })
}


const fetchNextData = ()=> {
    FetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res)=> {
      if(data?.results) {
        setData({
          ...data, results: [...data?.results, ...res.results]
        })
      } 
      else {
        setData(res)
      }
      // console.log('fetchnextdata')
        setPageNum((prev) => prev + 1)
    })
}


useEffect(()=> {
  // console.log('useeffect')
  setPageNum(1);
  fetchInitialData();
}, [query])

// console.log(data)

  return (
    <div className='container-fluid searchResultsPage'>
      <div className="container">
        {loading && <Spinner initial={true}/>}
        {!loading && (
          <div className="row">
            {data?.results?.length > 0 ? (
              <>
              <div className="col-12 pageTitle">
                {`Search ${data?.total_results > 1 ? 'results' : 'result'} of ${query}`}
              </div>
              <div className="col-12">
                  <InfiniteScroll
                  className='mx-0 g-2 gy-3 g-sm-3 g-lg-4 row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6'
                  dataLength={data?.results?.length || []}
                  next={fetchNextData}
                  hasMore={pageNum <= data?.total_pages}
                  loader={<Spinner />}>
                    {data?.results?.map((item, index)=> {
                      if(item.media_type === "person") return;
                      return (
                        <MovieCard key={index} data={item} fromSearch={true}/>
                      )
                    })}
                  </InfiniteScroll>
              </div>
              </>
            ) : (
              <>
                <div className="col-12 text-white">No Record Found</div>
              </>
            )}
          </div>
        )}
      </div>
      
    </div>
  )
}

export default SearchResult
