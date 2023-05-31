import React, { useEffect } from 'react'
import AdSense from 'react-adsense';
import { useParams } from "react-router-dom";

const Ads = ({slot}) => {
    let params = useParams()
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
    return (
    <div className='d-block'>
            {/* <AdSense.Google
                client="ca-pub-8648332257809046"
                slot="9581863358"
                style={{ display: 'block' }}
                format="auto"
                responsive="true"
            /> */}
            <ins className="adsbygoogle"
            style={{display: 'block'}}
            data-ad-client="ca-pub-8648332257809046"
            data-ad-slot={slot}
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
    )
}

export default Ads