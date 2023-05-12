import React from 'react';
import { Helmet } from 'react-helmet';
import Img from './../../components/lazyLoadImage/Img'
// import team_2x_avatar from './../../assets/img/team/2x-avatar.png'
// import team_1x_avatar from './../../assets/img/team/1x-avatar.png'
import team_m_avatar from './../../assets/img/team/m-avatar.png'
// import team_2x_jitendra from './../../assets/img/team/2x-jitendra-kumar-bijarnia.png'
// import team_1x_jitendra from './../../assets/img/team/1x-jitendra-kumar-bijarnia.png'
import team_m_jitendra from './../../assets/img/team/m-jitendra-kumar-bijarnia.png'
// import team_2x_sushil from './../../assets/img/team/2x-sushil-choudhary.png'
// import team_1x_sushil from './../../assets/img/team/1x-sushil-choudhary.png'
import team_m_sushil from './../../assets/img/team/m-sushil-choudhary.png'


const AboutUs = ({websiteName}) => {
  return (
    <>
    <Helmet>
      <title>About {`${websiteName}`} Learn More About Our Movie News and Reviews Site</title>
      <meta name="title" content={`About ${websiteName} Learn More About Our Movie News and Reviews Site`} />
      <meta name="description" content={`Learn more about ${websiteName}, the ultimate source for the latest movie news, ratings, and reviews. Discover our mission, team, and values.`} />
      <meta name="keywords" content="about us, movie news, movie reviews, our mission, our team, our values" />
      <meta name="robots" content="index, follow"></meta>
      <link rel="canonical" href="https://moviewalas.com/about-us"/>
      <h2 className='d-none'>Our Story</h2>
      <h2 className='d-none'>Our Mission</h2>
      <h2 className='d-none'>Our Team</h2>
      <h3 className='d-none'>Who We Are</h3>
      <h3 className='d-none'>Our Background</h3>
      <h3 className='d-none'>Our Values</h3>
      <h3 className='d-none'>Meet Our Team</h3>
      <h4 className='d-none'>Jitendra Kumar Bijarnia (Director)</h4>
      <h4 className='d-none'>Preetam Bohara (Co-Founder)</h4>
      <h4 className='d-none'>Sushil Choudhary (CEO)</h4>
      <h4 className='d-none'>Pallavi Mishra (CTO)</h4>
    </Helmet>
    <section className="container pt-4">
      <div className="row">
        <div className="col-12">
          <div className="row mx-0">
            <h1 className="col-12 px-0 text-light h3 fw-bold">About Us</h1>
            <h2 className="col-12 px-0 text-light h5 fw-semibold pt-4 pb-3">Our Story</h2>
            <p className='col-12 px-0 text-light small'>At {`${websiteName}`}, we believe that everyone should have access to the latest movies and TV shows. That's why we created a platform that makes it easy to find and watch the entertainment you love.</p>
            <p className='col-12 px-0 text-light small'>Our journey started with a simple idea: to create a website that brings together all the latest movies and TV shows in one place. We knew that people were tired of spending hours searching for the latest releases, only to end up with low-quality copies or incomplete information. So we set out to create a website that would solve this problem once and for all.</p>
            <h3 className="col-12 px-0 text-light h6 fw-semibold pt-4 pb-2">Meet Our Team</h3>
            <p className='col-12 px-0 text-light small'>Here are some of the key members of our team:</p>
            <div className="col-12 px-0">
              <div className="row gy-4">
                <div className="col-lg-3 col-md-6">
                  <div className="row mx-0 bg-theme3 rounded h-100 overflow-hidden shadow">
                    <div className="col-12">
                      <div className="row align-items-center py-3">
                        <div className="col-md-3 col-sm-2 col-3 rounded-pill shadow overflow-hidden mb-lg-3 ms-lg-3 ms-4 d-grid px-0">
                          <Img className='teamImg w-100 h-auto'
                            src={team_m_jitendra}
                            // srcSet={`${team_m_jitendra} 400w, ${team_1x_jitendra} 900w, ${team_2x_jitendra} 1080w`}
                            alt={'Jitendra Kumar Bijarnia (Director/Founder)'}
                            width={"146"}
                            height={"146"}
                          />
                        </div>
                        <div className="col-lg-12 col-8 mt-lg-0 px-3">
                          <div className="row">
                            <h4 className="col-12 text-light h6 fw-semibold">Jitendra Kumar Bijarnia </h4>
                            <small className="col-12 text-light fw-medium mb-lg-3">Director/Founder</small>
                          </div>
                        </div>
                        <p className='col-12 text-light small pt-lg-0 pt-4 px-lg-3 px-4 mb-1'><small>Jitendra is our Director, with over 10 years of experience in the entertainment industry. He brings his expertise in project management, marketing, and business development to the team.</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="row mx-0 bg-theme3 rounded h-100 overflow-hidden shadow">
                    <div className="col-12">
                      <div className="row align-items-center py-3">
                        <div className="col-md-3 col-sm-2 col-3 rounded-pill shadow overflow-hidden mb-lg-3 ms-lg-3 ms-4 d-grid px-0">
                          <Img className='teamImg w-100 h-auto'
                            src={team_m_avatar}
                            // srcSet={`${team_m_avatar} 400w, ${team_1x_avatar} 900w, ${team_2x_avatar} 1080w`}
                            alt={'Preetam Bohara (Co-Founder)'}
                            width={"146"}
                            height={"146"}
                          />
                        </div>
                        <div className="col-lg-12 col-8 mt-lg-0 px-3">
                          <div className="row">
                        <h4 className="col-12 text-light h6 fw-semibold">Preetam Bohara </h4>
                        <small className="col-12 text-light fw-medium mb-lg-3">Co-Founder</small>
                          </div>
                        </div>
                        <p className='col-12 text-light small pt-lg-0 pt-4 px-lg-3 px-4 mb-1'><small>Preetam is our Co-Founder, with a passion for technology and innovation. He has extensive experience in software development and has played a key role in building our platform.</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="row mx-0 bg-theme3 rounded h-100 overflow-hidden shadow">
                    <div className="col-12">
                      <div className="row align-items-center py-3">
                        <div className="col-md-3 col-sm-2 col-3 rounded-pill shadow overflow-hidden mb-lg-3 ms-lg-3 ms-4 d-grid px-0">
                          <Img className='teamImg w-100 h-auto'
                            src={team_m_sushil}
                            // srcSet={`${team_m_sushil} 400w, ${team_1x_sushil} 900w, ${team_2x_sushil} 1080w`}
                            alt={'Sushil Choudhary (CEO)'}
                            width={"146"}
                            height={"146"}
                          />
                        </div>
                        <div className="col-lg-12 col-8 mt-lg-0 px-3">
                          <div className="row">
                        <h4 className="col-12 text-light h6 fw-semibold">Sushil Choudhary </h4>
                        <small className="col-12 text-light fw-medium mb-lg-3">CEO</small>
                          </div>
                        </div>
                        <p className='col-12 text-light small pt-lg-0 pt-4 px-lg-3 px-4 mb-1'><small>Sushil is our CEO, with over 6 years of experience in software development and product management. He provides strategic direction to the team and is committed to creating the best possible experience for our users.</small></p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6">
                  <div className="row mx-0 bg-theme3 rounded h-100 overflow-hidden shadow">
                    <div className="col-12">
                      <div className="row align-items-center py-3">
                        <div className="col-md-3 col-sm-2 col-3 rounded-pill shadow overflow-hidden mb-lg-3 ms-lg-3 ms-4 d-grid px-0">
                          <Img className='teamImg w-100 h-auto'
                            src={team_m_avatar}
                            // srcSet={`${team_m_avatar} 400w, ${team_1x_avatar} 900w, ${team_2x_avatar} 1080w`}
                            alt={'Pallavi Mishra (CTO)'}
                            width={"146"}
                            height={"146"}
                          />
                        </div>
                        <div className="col-lg-12 col-8 mt-lg-0 px-3">
                          <div className="row">
                        <h4 className="col-12 text-light h6 fw-semibold">Pallavi Mishra </h4>
                        <small className="col-12 text-light fw-medium mb-lg-3">CTO</small>
                          </div>
                        </div>
                        <p className='col-12 text-light small pt-lg-0 pt-4 px-lg-3 px-4 mb-1'><small>Pallavi is our CTO, with a strong background in software engineering and a passion for innovation. She leads our development team and ensures that our platform stays ahead of the curve in terms of technology and user experience.</small></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className='col-12 px-0 text-light small pt-4'>We are proud to have such a talented and dedicated team working on {`${websiteName}`}. Together, we are committed to providing our users with the best possible experience when it comes to discovering new movies and TV shows.</p>
            <h2 className="col-12 px-0 text-light h5 fw-semibold pt-4 pb-3">Our Mission</h2>
            <p className='col-12 px-0 text-light small'>Our mission at {`${websiteName}`} is to be the go-to platform for movie and TV show lovers everywhere. We strive to provide the most up-to-date information on all the latest releases, along with ratings, reviews, and trailers to help you make informed decisions about what to watch next.</p>
            <p className='col-12 px-0 text-light small'>At the same time, we believe that everyone should have the opportunity to experience the magic of movies and TV shows, regardless of where they live or how much money they have. That's why we're committed to making our platform accessible to everyone, so that you can enjoy your favorite entertainment anytime, anywhere.</p>
            <h2 className="col-12 px-0 text-light h5 fw-semibold pt-4 pb-3">Our Team</h2>
            <p className='col-12 px-0 text-light small'>We are a dedicated team of movie and TV show enthusiasts who are passionate about sharing our love of entertainment with the world. Our team includes experts in movie and TV show curation, content creation, and digital marketing, all working together to bring you the best possible experience on our platform.</p>
            <h3 className="col-12 px-0 text-light h6 fw-semibold pt-4 pb-2">Who We Are</h3>
            <p className='col-12 px-0 text-light small'>We are a team of professionals with years of experience in the entertainment industry. We have a deep understanding of what makes a great movie or TV show, and we use this knowledge to curate the best content for our users.</p>
            <h3 className="col-12 px-0 text-light h6 fw-semibold pt-4 pb-2">Our Background</h3>
            <p className='col-12 px-0 text-light small'>Our team has a diverse background in entertainment, including experience in production, marketing, and distribution. We have worked with some of the biggest names in the industry, and we bring this expertise to everything we do at {`${websiteName}`}.</p>
            <h3 className="col-12 px-0 text-light h6 fw-semibold pt-4 pb-2">Our Values</h3>
            <p className='col-12 px-0 text-light small'>At {`${websiteName}`}, we believe in providing our users with the best possible experience. That's why we are committed to the following values:</p>
            <ul className='col-12 px-3 text-light small'>
              <li className='py-1'><b>Quality:</b> We only feature the latest and greatest movies and TV shows, so you can be sure that you're getting the best entertainment available.</li>
              <li className='py-1'><b>Accessibility:</b> We believe that everyone should have access to the entertainment they love, regardless of their location or financial situation.</li>
              <li className='py-1'><b>Transparency:</b> We are always open and honest with our users about our content and our platform.</li>
              <li className='py-1'><b>Innovation:</b> We are constantly striving to improve our platform and bring you new and exciting features.</li>
            </ul>
            <p className='col-12 text-light small mt-4 bg-theme3 border border-2 border-theme1 rounded p-4'>"{`${websiteName}`} is powered by the TMDB API, which provides us with access to a vast library of movie and TV show data. We are grateful to TMDB for making this data available, and we are committed to giving them credit for the information we use on our site. Our goal is to provide an easy and informative way for users to discover new movies and TV shows, and the TMDB API is a key part of our platform."</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs
