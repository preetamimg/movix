import React from 'react'
import Img from './../../../components/lazyLoadImage/Img'
import { useSelector } from 'react-redux'
import avatar from './../../../assets/img/avatar.png'
import PersonSocial from './PersonSocial'
import './style.scss'

const PersonBanner = ({data, loading}) => {
    const {url} = useSelector((state) => state.home)
    return (
    <div className='container-fluid personBannerFluid'>
        <div className="container">
            {!loading ? (
                <>
                    <div className="row text-white">
                        <div className="col-md-5 col-lg-4 col-xl-3">
                            <div className="row mx-0">
                                <div className="col-12 mb-3">
                                    <div className="personBanner">
                                        <Img src={data?.profile_path ? url?.profile_sizes_h632 + data?.profile_path : avatar} alt={'Person Banner'} />
                                    </div>
                                    <PersonSocial mediaType={'person'} id={data?.id}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="row">
                                {data?.name && (
                                    <div className="col-12 personName">{data?.name}</div>
                                )}
                                <div className="col-12">
                                    <div className="heading">Biography :</div>
                                    {data?.biography?.length > 1 ? (
                                        <div className="subDetail">{data?.biography?.split('\n\n')?.map((item, index)=>(
                                            <div key={index} className="innerText">
                                                {item}
                                            </div>
                                        ))}</div>
                                    ) : (
                                        <div className="subDetail">
                                            {`We don't have a biography for ${data?.name}`}
                                        </div>
                                    )}
                                </div>
                                <div className="col-12 heading mt-3">Personal Info :</div>
                                {data?.known_for_department && (
                                <div className="col-auto">
                                    <div className="subDetailHead">Known For</div>
                                    <div className="subDetailText">{data?.known_for_department}</div>
                                </div>
                                )}
                                {data?.gender && (
                                <div className="col-auto">
                                    <div className="subDetailHead">Gender</div>
                                    <div className="subDetailText">
                                        {data?.gender === 2 ? "Male" : "Female" }
                                        </div>
                                </div>
                                )}
                                {data?.birthday && (
                                <div className="col-auto">
                                    <div className="subDetailHead">Birthday</div>
                                    <div className="subDetailText">{data?.birthday}</div>
                                </div>
                                )}
                                {data?.deathday && (
                                <div className="col-auto">
                                    <div className="subDetailHead">Deathday</div>
                                    <div className="subDetailText">{data?.deathday}</div>
                                </div>
                                )}
                                {data?.place_of_birth && (
                                <div className="col-auto">
                                    <div className="subDetailHead">Birth Place</div>
                                    <div className="subDetailText">{data?.place_of_birth}</div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="text-white">loading</div>
                </>
            )}
        </div>
    </div>
    )
}

export default PersonBanner