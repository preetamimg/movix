import React, { useState } from "react";
import SwitchTabs from "../../../components/switchTabs/SwitchTabs";
import useFetch from "../../../hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Trending = () => {
    const [endPoint, setEndPoint] = useState('day')
    const {data, loading} = useFetch(`/trending/all/${endPoint}`)
    const onTabChange = (tab)=> {
        setEndPoint(tab === 'Day' ? 'day' : 'week')
    }
    const reducedArray = data?.results?.slice(0, 12)
    console.log('reduce', reducedArray)
    return <section className="container-fluid py-3 py-lg-4">
        <div className="container px-0">
            <div className="row mx-0 align-items-center">
                <div className="col sectionHeading">Trending</div>
                <div className="col-auto">
                    <SwitchTabs data={['Day', 'Week']}
                    onTabChange = {onTabChange}/>
                    </div>
            </div>
            <Carousel data={reducedArray} loading={loading}/>
        </div>
    </section>;
};

export default Trending;
