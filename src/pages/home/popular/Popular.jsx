import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
    const [endPoint, setEndPoint] = useState('movie')

    const {data, loading} = useFetch(`/${endPoint}/popular`)
    const onTabChange = (tab)=> {
        setEndPoint(tab === 'Movies' ? 'movie' : 'tv')
    }
    return <div className="container-fluid py-2 py-lg-3">
        <div className="container px-0">
            <div className="row mx-0 align-items-center">
                <div className="col sectionHeading">Popular</div>
                <div className="col-auto">
                    <SwitchTabs data={['Movies', 'TV Shows']}
                    onTabChange = {onTabChange}/>
                    </div>
            </div>
            <Carousel data={data?.results} loading={loading} endPoint={endPoint}/>
        </div>
    </div>;
};

export default Popular;
