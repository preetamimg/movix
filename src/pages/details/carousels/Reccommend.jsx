import React from "react";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Recommended = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/recommendations`);
    console.log(data)


    return <div className="container-fluid py-2 py-lg-3">
        <div className="container px-0">
            <div className="row mx-0 align-items-center">
                <div className="col sectionHeading">Recommended</div>
            </div>
            <Carousel data={data?.results} loading={loading} endPoint={mediaType}/>
        </div>
    </div>;
};

export default Recommended;
