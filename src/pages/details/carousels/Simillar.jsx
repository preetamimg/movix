import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Simillar = ({ mediaType, id }) => {
    const { data, loading } = useFetch(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <>
            {data?.results?.length > 1 && (
                <div className="container-fluid py-2 py-lg-3">
                <div className="container px-0">
                    <div className="row mx-0 align-items-center">
                        <div className="col sectionHeading">{title}</div>
                    </div>
                    <Carousel data={data?.results} loading={loading} endPoint={mediaType}/>
                </div>
            </div>
            )}
        </>
    )
};

export default Simillar;
