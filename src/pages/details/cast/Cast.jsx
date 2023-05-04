import React , {useRef} from "react";
import { useSelector } from "react-redux";
import {BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,} from "react-icons/bs";

import "./style.scss";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/img/avatar.avif";

const Cast = ({ data, loading }) => {
    const CarouselContainer = useRef();
    const { url } = useSelector((state) => state.home);
    let castData = data?.cast;

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
        <div className="container-fluid castSection">
            <div className="container position-relative">
            <BsFillArrowLeftCircleFill
            className="carouselLeftNav arrow"
            onClick={()=> navigation('left')}/>
            <BsFillArrowRightCircleFill
            className="carouselRightNav arrow"
            onClick={()=> navigation('right')}/>
                <div className="sectionHeading">Top Cast</div>
                {!loading ? (
                    <div className="flex-nowrap mx-0 g-2 g-sm-3 g-lg-4 row listItems" ref={CarouselContainer}>
                        {castData?.map((item)=> (
                            <div className="col listItem" key={item.id}>
                                <div className="row mx-0 row-cols-6">
                                    <div className="col-12">
                                        <div className="profileImg mx-auto">
                                            <Img src={item?.profile_path ? url?.profile + item?.profile_path : avatar } width={'125'} height={'125'} alt={"Cast Image"}/>
                                        </div>
                                    </div>
                                    <div className="col-12 name">{item?.name}</div>
                                    <div className="col-12 character">{item?.character}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="castSkeleton">
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
    );
};

export default Cast;