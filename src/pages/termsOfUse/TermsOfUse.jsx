import React from 'react'
import './style.scss'

const TermsOfUse = () => {
  return (
    <>
    <div className="container pt-4">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 text-white h6 text-center pb-4">Terms of Use</div>
          </div>
          <div className="row small">
            <div className="col-12 small text-white pb-3">
            Welcome to MovieWalas, your go-to source for the latest movie news, ratings, and reviews. By using our website, you agree to comply with the following terms of use:
            </div>
          </div>
          <ol className='row gap-3 text-white small'>
            <li className='col-12 small'>Content: All content on our website, including but not limited to movie reviews, ratings, cast and crew information, trailers, and images, is provided for informational and entertainment purposes only. We do not guarantee the accuracy, completeness, or reliability of any content on our website.</li>
            <li className='col-12 small'>Copyright: All content on our website is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or display any content on our website without our prior written consent.</li>
            <li className='col-12 small'>User Conduct: You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of our website by, any third party. You may not use our website to harass, defame, or abuse others, or to transmit any unlawful, threatening, defamatory, or otherwise objectionable material.</li>
            <li className='col-12 small'>Links: Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the content, policies, or practices of any third-party websites, and we do not endorse or make any representations about such websites. You access any third-party websites at your own risk.</li>
            <li className='col-12 small'>Disclaimer: We provide our website on an "as is" and "as available" basis. We do not warrant that our website will be uninterrupted or error-free, or that any defects will be corrected. We are not responsible for any loss or damage that may result from your use of our website.</li>
            <li className='col-12 small'>Limitation of Liability: To the fullest extent permitted by law, we disclaim all liability for any indirect, incidental, special, or consequential damages arising out of or in any way connected with your use of our website.</li>
            <li className='col-12 small'>Governing Law: These terms of use are governed by and construed in accordance with the laws of India, and any disputes arising out of or in connection with these terms of use will be subject to the exclusive jurisdiction of the courts of India.</li>
          </ol>
          <div className="row small">
            <div className="col-12 small text-white py-3">By using our website, you agree to these terms of use. If you do not agree to these terms of use, you should not use our website.</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default TermsOfUse