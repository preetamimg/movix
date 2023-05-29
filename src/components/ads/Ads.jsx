import React, { useEffect } from 'react'
import AdSense from 'react-adsense';

const Ads = () => {
    useEffect(() => {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);
    return (
    <div className='container-fluid'>
        <div className="container">
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
            data-ad-slot="9581863358"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
    </div>
    )
}

export default Ads