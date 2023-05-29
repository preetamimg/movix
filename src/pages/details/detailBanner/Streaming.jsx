import React from 'react'
import useFetch from '../../../hooks/useFetch'

const Streaming = ({mediaType, id}) => {
    const {data, loading} = useFetch(`/${mediaType}/${id}/watch/providers`)

    console.log(data)
  return (
    <>
      {!loading ? (
        <>
          {/* <div className="text-white mb-2 streamingText">Just Watch</div> */}
        </>
      ) : (
        <>loading</>
      ) }
    </>
  )
}

export default Streaming