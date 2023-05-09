import React , {useRef} from "react";
import { useSelector } from "react-redux";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import "./style.scss";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/img/avatar.png";

const Cast = ({ data, loading }) => {
    const CarouselContainer = useRef();
    const Navigate = useNavigate()
    const { url } = useSelector((state) => state.home);
    let castData = data?.cast;

    console.log(castData)

    const skeleton = () => {
        return (
            <div className="skItem">
                <div className="circle skeleton"></div>
                <div className="line1 skeleton"></div>
                <div className="line2 skeleton"></div>
            </div>
        );
    };
    const navigation = (dir)=> {
        const container = CarouselContainer.current;

        const scrollAmount = dir === 'left' ? container.scrollLeft - (container.offsetWidth) :
        container.scrollLeft + (container.offsetWidth);

        container.scrollTo({
            left : scrollAmount,
            behavior : 'smooth'
        })
    }
    return (
        <>
            {castData?.length > 1 && (
                <div className="container-fluid castSection py-2 py-lg-3">
                <div className="container position-relative px-0">
                    {castData?.length > 8 && (
                        <>
                            <BsFillArrowLeftCircleFill
                            className="carouselLeftNav arrow d-none d-md-block"
                            onClick={()=> navigation('left')}/>
                            <BsFillArrowRightCircleFill
                            className="carouselRightNav arrow d-none d-md-block"
                            onClick={()=> navigation('right')}/>
                        </>
                    )}
                    <div className="sectionHeading">Top Cast</div>
                    {!loading ? (
                        <div className="flex-nowrap mx-0 g-2 g-sm-3 g-lg-4 row listItems" ref={CarouselContainer}>
                            {castData?.map((item)=> (
                                <div className="col-auto listItem" key={item.id}>
                                    <div className="row"
                                    onClick={()=> Navigate(`/person/${item.id}`)}
                                    >
                                        <div className="col-12">
                                            <div className="profileImg mx-auto">
                                                <Img 
                                                src={item?.profile_path ? url?.profile_sizes_w45 + item?.profile_path : avatar } 
                                                srcSet={`${item?.profile_path ? url.profile_sizes_w45 + item.profile_path : avatar} 100w, ${item?.profile_path ? url.profile_sizes_w185 + item.profile_path : avatar} 250w`}
                                                width={'141'} 
                                                height={'226'} 
                                                alt={"Cast Image"}/>
                                            </div>
                                        </div>
                                        <div className="col-12 name">{item?.name}</div>
                                        <div className="col-12 character">{item?.character}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex-nowrap mx-0 g-2 g-sm-3 g-lg-4 row castSkeleton">
                            {skeleton()}
                            {skeleton()}
                            {skeleton()}
                            {skeleton()}
                            {skeleton()}
                            {skeleton()}
                            {skeleton()}
                            {skeleton()}
                        </div>
                    )}
                </div>
            </div>
            )}
        </>
        
    );
};

export default Cast;