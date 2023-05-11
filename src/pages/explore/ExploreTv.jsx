import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';
import { useParams, useSearchParams  } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";

import "./style.scss";

import useFetch from "../../hooks/useFetch";
import {FetchDataFromApi} from './../../utils/api'
import MovieCard from "../../components/movieCard/MovieCard";
import Spinner from "../../components/spinner/Spinner";

let filters = {};

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    { value: "primary_release_date.desc",label: "Release Date Descending",},
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = ({websiteName}) => {
    
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
    const { mediaType } = useParams();
    let [searchParams] = useSearchParams();
    console.log('::::::::::::::::::',searchParams.get('type')); 
    const { data: genresData } = useFetch(`/genre/tv/list`);

    const fetchInitialData = () => {
        setLoading(true);
        FetchDataFromApi(`/discover/tv`, filters).then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        });
    };

    const fetchNextPageData = () => {
      FetchDataFromApi(
            `/discover/tv?page=${pageNum}`,
            filters
        ).then((res) => {
            if (data?.results) {
                setData({
                    ...data,
                    results: [...data?.results, ...res.results],
                });
            } else {
                setData(res);
            }
            setPageNum((prev) => prev + 1);
        });
    };

    useEffect(() => {
        filters = {};
        setData(null);
        setPageNum(1);
        setSortby(null);
        setGenre(null);
        fetchInitialData();
    }, [mediaType]);

    console.log(genresData)

    const onChange = (selectedItems, action) => {
        if (action.name === "sortby") {
            setSortby(selectedItems);
            if (action.action !== "clear") {
                filters.sort_by = selectedItems.value;
            } else {
                delete filters.sort_by;
            }
        }

        if (action.name === "genres") {
            setGenre(selectedItems);
            console.log('selectsd', selectedItems)
            if (action.action !== "clear") {
                let genreId = selectedItems.map((g) => g.id);
                genreId = JSON.stringify(genreId).slice(1, -1);
                filters.with_genres = genreId;
            } else {
                delete filters.with_genres;
            }
        }

        setPageNum(1);
        fetchInitialData();
    };

    return (
        <>
        <Helmet>
            <title>Explore Latest TV Shows and Episodes - {`${websiteName}`}</title>
            <meta name="title" content={`Explore Latest TV Shows and Episodes - ${websiteName}`} />
            <meta name="description" content={`Keep up with the latest TV shows and episodes at ${websiteName}. Find out what other viewers think about the latest releases and discover new shows to add to your queue.`} />
            <meta name="keywords" content={`latest TV shows, episodes, explore TV shows, queue, ${websiteName}`} />
            <meta name="robots" content="index, follow"></meta>
            <link rel="canonical" href="https://moviewalas.com/tv"/>
        </Helmet>
        <div className="container-fluid explorePage">
            <div className="container">
                <div className="row mx-0 mb-3 align-items-center">
                    <div className="col-md pageTitle">Explore TV Shows</div>
                    <div className="col-md-auto px-0 filters mt-2 mt-md-0">
                      <div className="row mx-0">
                        <div className="col-md-auto col-sm-6 mb-2 mb-sm-0">
                          <Select
                              isMulti
                              name="genres"
                              value={genre}
                              closeMenuOnSelect={false}
                              options={genresData?.genres}
                              getOptionLabel={(option) => option.name}
                              getOptionValue={(option) => option.id}
                              onChange={onChange}
                              placeholder="Select genres"
                              className="react-select-container genresDD"
                              classNamePrefix="react-select"
                          />
                        </div>
                        <div className="col-md-auto col-sm-6">
                          <Select
                              name="sortby"
                              value={sortby}
                              options={sortbyData}
                              onChange={onChange}
                              isClearable={true}
                              placeholder="Sort by"
                              className="react-select-container sortbyDD"
                              classNamePrefix="react-select"
                          />
                        </div>
                      </div>
                    </div>
                </div>
                {loading && <Spinner initial={true} />}
                {!loading && (
                    <>
                        {data?.results?.length > 0 ? (
                            <InfiniteScroll
                                className="mx-0 g-2 gy-3 g-sm-3 g-lg-4 row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6 content"
                                dataLength={data?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                            >
                                {data?.results?.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return (
                                        <MovieCard
                                            key={index}
                                            data={item}
                                            mediaType={'tv'}
                                        />
                                    );
                                })}
                            </InfiniteScroll>
                        ) : (
                            <span className="resultNotFound">
                                Sorry, Results not found!
                            </span>
                        )}
                    </>
                )}
            </div>
        </div>
        </>
    );
};

export default Explore;
