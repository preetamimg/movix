import React from 'react'
import { useSelector } from 'react-redux'

const Genres = ({data}) => {
    const {genres} = useSelector((state)=> state.home);
    return (
        <div className='genres d-none w-75 d-lg-flex flex-wrap justify-content-end gap-1 position-absolute' style={{right: '8px', bottom: '8px'}}>
            {data?.map((g)=> {
                if(!genres[g]?.name) return;
                return(
                    <div key={g} className="genre bg-danger text-white p-1 rounded" style={{fontSize : '10px'}}>
                        {genres[g]?.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres
