import React, { useEffect, useState } from 'react'
import useFetch from '../../../hooks/useFetch'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux'

const Reviews = ({mediaType, id}) => {
    const {data, loading} = useFetch(`/${mediaType}/${id}/reviews`)
    // console.log(data?.results)
    const [firstReview, setFirstReview] = useState('')
    const [showReview, setShowReview] = useState(false)

    useEffect(()=> {
        setFirstReview(data?.results?.[0])
    }, [data])
    // console.log(firstReview)

    const handleReview = ()=> {
        setShowReview(!showReview)
    }
    
    const {url} = useSelector((state) => state.home)
    return (
        <>
        {!loading ? (
        <>
                {data?.results.length > 1 && (
                <section className="container-fluid py-2 py-lg-3">
                <div className="container px-0">
                    <div className="row mx-0 align-items-center mb-3">
                        <div className="col sectionHeading">Reviews</div>
                        <div className="col-auto text-white viewText" onClick={handleReview}>
                            {showReview ? 'View Less' : 'View All'}
                            </div>
                    </div>
                    <div className="row mx-0">
                        {showReview ? (<>
                        <div className="col-12 px-0">
                            {data?.results?.map((item, index)=> (
                                <>
                                <div className="row mx-0 mb-3 mb-lg-4 align-items-center text-white reviewCard" key={index}>
                                    <div className="col-auto pe-0">
                                        <div className="reviewImage d-flex align-items-center justify-content-center bg-theme1 rounded overflow-hidden">
                                            {item?.author_details?.avatar_path ? (
                                                <>
                                                    {item?.author_details?.avatar_path?.includes('https') ? (
                                                    <img src={item?.author_details?.avatar_path?.slice(1)} alt="review User" className='w-100 h-100 object-fit-cover'/>
                                                    ) : (
                                                        <img src={url?.poster_sizes_w185 + item?.author_details?.avatar_path} alt="review User" className='w-100 h-100 object-fit-cover'/> 
                                                    )}
                                                </>
                                            ) : (
                                                <div className="imageText text-uppercase">{item?.author?.charAt(0)}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row mx-0 gx-0">
                                            <div className="col-12 text-capitalize reviewName">{item?.author}</div>
                                            <div className="col-12 reviewDate">{dayjs(item?.created_at).format("MMMM D, YYYY")}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 reviewText">{item?.content?.split('.').map((itemm, indexx)=> {
                                        return (indexx % 6) ? (
                                            <>
                                            <span key={indexx}>{itemm}.</span>
                                            </>
                                        ) : (<span className='d-block my-2'></span>)
                                    })}</div>
                                </div>
                                </>
                            ))}
                        </div>
                        </>) : (<>
                        <div className="col-12 px-0">
                        <div className="row mx-0 mb-3 mb-lg-4 align-items-center text-white reviewCard">
                                    <div className="col-auto pe-0">
                                        <div className="reviewImage d-flex align-items-center justify-content-center bg-theme1 rounded overflow-hidden">
                                            {firstReview?.author_details?.avatar_path ? (
                                                <>
                                                    {firstReview?.author_details?.avatar_path?.includes('https') ? (
                                                    <img src={firstReview?.author_details?.avatar_path?.slice(1)} alt="review User" className='w-100 h-100 object-fit-cover'/>
                                                    ) : (
                                                        <img src={url?.poster_sizes_w185 + firstReview?.author_details?.avatar_path} alt="review User" className='w-100 h-100 object-fit-cover'/> 
                                                    )}
                                                </>
                                            ) : (
                                                <div className="imageText text-uppercase">{firstReview?.author?.charAt(0)}</div>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="row mx-0 gx-0">
                                            <div className="col-12 text-capitalize reviewName">{firstReview?.author}</div>
                                            <div className="col-12 reviewDate">{dayjs(firstReview?.created_at).format("MMMM D, YYYY")}</div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 reviewText">{firstReview?.content?.split('.').map((itemm, indexx)=> {
                                        return (indexx % 6) ? (
                                            <>
                                            <span key={indexx}>{itemm}.</span>
                                            </>
                                        ) : (<span className='d-block my-2'></span>)
                                    })}</div>
                                </div>
                        </div>
                        </>)}
                    </div>
                </div>
            </section>
            )}
        </>
        ) : (
        <>loading</>
        ) }
    </>
    )
}

export default Reviews