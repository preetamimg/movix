import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = ({websiteName}) => {
  return (
    <>
    <Helmet>
      <title>Privacy Policy - Your Privacy Matters to Us at {`${websiteName}`}</title>
      <meta name="title" content={`Privacy Policy - Your Privacy Matters to Us at ${websiteName}`} />
      <meta name="description" content={`At ${websiteName}, we are committed to protecting your personal information. Learn how we collect, use, and disclose your information in our privacy policy.`} />
      <meta name="keywords" content="privacy policy, personal information, data collection, data protection, online privacy, website security" />
      <meta name="robots" content="index, follow"></meta>
    </Helmet>
    <div className="container pt-4">
      <div className="row">
        <div className="col-12">
          <div className="row">
            <div className="col-12 text-white h6 text-center pb-4">Privacy Policy</div>
          </div>
          <div className="row small">
            <div className="col-12 small text-white pb-3">
            Welcome to {websiteName}, your go-to source for the latest movie news, ratings, and reviews. We respect your privacy and are committed to protecting your personal information. This privacy policy explains how we collect, use, and disclose your personal information when you use our website.
            </div>
          </div>
          <ol className='row gap-3 text-white small'>
            <li className='col-12 small'><b>Information We Collect:</b> We collect personal information that you voluntarily provide to us, such as your name, email address, and any other information you choose to provide. We also collect non-personal information such as your IP address and browser type.</li>
            <li className='col-12 small'><b>Use of Information:</b> We use your personal information to provide you with the services and information you request from us, such as responding to your inquiries or sending you newsletters. We may also use your information to improve our website and services, or to provide you with targeted advertising based on your interests.</li>
            <li className='col-12 small'><b>Disclosure of Information:</b> We do not sell or rent your personal information to third parties. However, we may disclose your personal information to our service providers who assist us in providing our services. We may also disclose your personal information if required by law or to protect our rights or property.</li>
            <li className='col-12 small'><b>Cookies:</b> We use cookies to collect non-personal information and to improve your user experience on our website. You can set your browser to refuse cookies, but this may limit your ability to use some features of our website.</li>
            <li className='col-12 small'><b>Third-Party Websites:</b> Our website may contain links to third-party websites that are not owned or controlled by us. We are not responsible for the privacy policies or practices of any third-party websites, and we recommend that you review the privacy policies of any such websites before providing any personal information.</li>
            <li className='col-12 small'><b>Security:</b> We use reasonable measures to protect your personal information from unauthorized access, disclosure, or misuse. However, we cannot guarantee the security of your personal information.</li>
            <li className='col-12 small'><b>Children's Privacy:</b> Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13.</li>
            <li className='col-12 small'><b>Changes to Privacy Policy:</b> We may update this privacy policy from time to time. If we make any material changes, we will notify you by email or by posting a notice on our website.</li>
          </ol>
          <div className="row small">
            <div className="col-12 small text-white py-3">By using our website, you consent to our privacy policy. If you have any questions or concerns about our privacy policy, please contact us.</div>
          </div>
          <div className="row small">
            <div className="col-12 small text-white py-3">Please note that all data used on our website is obtained from TMDB and we do not own or control the information provided by TMDB.</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PrivacyPolicy