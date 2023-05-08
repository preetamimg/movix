import React from 'react'
import useFetch from "../../../hooks/useFetch";
import TwitterIcon from './../../../assets/img/TwitterIcon.svg'
import FacebookIcon from './../../../assets/img/FacebookIcon.svg'
import InstaIcon from './../../../assets/img/InstaIcon.svg'
import YouTubeIcon from './../../../assets/img/YoutubeIcon.svg'


const PersonSocial = ({ mediaType, id }) => {
    const { data, loading, error } = useFetch(`/${mediaType}/${id}/external_ids`);
    console.log(data)
    return (
        <div className='d-flex align-items-center mt-3'>
            {data?.twitter_id && (
            <a className="socialAnchor" target='_blank' href={`https://twitter.com/${data?.twitter_id}`}>
                <img src={TwitterIcon} alt="twitter icon" />
            </a>
            )}
            {data?.facebook_id && (
            <a className="socialAnchor" target='_blank' href={`https://www.facebook.com/${data?.facebook_id}`}>
                <img src={FacebookIcon} alt="twitter icon" />
            </a>
            )}
            {data?.instagram_id && (
            <a className="socialAnchor" target='_blank' href={`https://www.instagram.com/${data?.instagram_id}`}>
                <img src={InstaIcon} alt="instagram icon" />
            </a>
            )}
            {data?.youtube_id && (
            <a className="socialAnchor" target='_blank' href={`https://www.youtube.com/${data?.youtube_id}`}>
                <img src={YouTubeIcon} alt="twitter icon" />
            </a>
            )}
        </div>
    )
}

export default PersonSocial