import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

const Explore = () => {
    const [data, setData] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
    const { mediaType, genreName } = useParams();

    const { data: genresData } = useFetch(`/genre/list`);

    console.log(genresData?.genres)
    console.log(genreName)
    let filterGener = genresData?.genres?.filter((x)=> x.name === genreName)
    console.log(filterGener)
    let generId = filterGener?.id;

    const fetchInitialData = () => {
        setLoading(true);
        FetchDataFromApi(`/discover/movie?with_genres${generId}`).then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        });
    };

    const fetchNextPageData = () => {
    FetchDataFromApi(
            `/discover/movie?with_genres${generId}?page=${pageNum}`,
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


    const onChange = (selectedItems, action) => {
        if (action.name === "sortby") {
            setSortby(selectedItems);
            if (action.action !== "clear") {
                filters.sort_by = selectedItems.value;
            } else {
                delete filters.sort_by;
            }
        }

        // if (action.name === "genres") {
        //     setGenre(selectedItems);
        //     console.log('selectsd', selectedItems)
        //     if (action.action !== "clear") {
        //         let genreId = selectedItems.map((g) => g.id);
        //         genreId = JSON.stringify(genreId).slice(1, -1);
        //         filters.with_genres = genreId;
        //     } else {
        //         delete filters.with_genres;
        //     }
        // }

        setPageNum(1);
        fetchInitialData();
    };

    return (
        <div className="container-fluid explorePage">
            <div className="container">
                <div className="row mx-0 mb-3 align-items-center">
                    <div className="col-md pageTitle">
                        Explore {genreName}
                    </div>
                    <div className="col-md-auto px-0 filters mt-2 mt-md-0">
                      <div className="row mx-0">
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
                                            mediaType={mediaType}
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
    );
};

export default Explore;
