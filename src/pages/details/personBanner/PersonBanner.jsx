import React from 'react'
import Img from './../../../components/lazyLoadImage/Img'

const PersonBanner = ({data, loading}) => {
    return (
    <div className='container-fluid'>
        <div className="container">
            {!loading && (
                <>
                    <div className="row">
                        <div className="col-4">
                            <div className="personBanner">
                                <Img />
                            </div>
                        </div>
                        <div className="col-8"></div>
                    </div>
                </>
            )}
        </div>
    </div>
    )
}

export default PersonBanner