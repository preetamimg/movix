import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const RelatedMovie = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/combined_credits`);
    console.log(data)
    data?.cast.sort(function(a,b){
        return new Date(b.release_date) - new Date(a.release_date)
    })


    return (
        <>
            {data?.cast.length > 1 && (
                <>
                <div className="container-fluid py-2 py-lg-3">
                    <div className="container px-0">
                        <div className="row mx-0 align-items-center">
                            <div className="col sectionHeading">Known For</div>
                        </div>
                        <Carousel data={data?.cast} loading={loading} endPoint={mediaType}/>
                    </div>
                </div>
                </>
            )}
        </>
    )
};

export default RelatedMovie;
