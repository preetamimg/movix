import React from 'react'
import './style.scss'
import blogImg from '../../assets/img/demo-blog.jpg'

const Blog = ()=>{
    return(
        <>
            <div className="container py-4">
                <div className="row">
                    <div className="col-12 blogSectionHeading text-center mb-4">
                        Blogs
                    </div>
                    <div className="col-12">
                        <div className="row row-cols-4 g-4">
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card bg-transparent rounded-0 border-0 blogCard">
                                    <div className="cardImg">
                                        <img src={blogImg} className="card-img-top" alt="demo-blog"/>
                                    </div>
                                    <div className="card-body">
                                        <div className="card-subtitle mb-2 ">WEBSITE ESSENTIALS</div>
                                        <div className="card-title">What is a domain name for beginners and why it matters</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog