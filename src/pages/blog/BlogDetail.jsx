import React from 'react'
import './style.scss'
import userImg from '../../assets/img/avatar.png'
import likeImg from '../../assets/img/like.svg'
import chatImg from '../../assets/img/chat.svg'
import shareImg from '../../assets/img/Share.svg'
import blogImg from '../../assets/img/14.jpg'
// import blogImg2 from '../../assets/img/demo-blog-2.webp'

const BlogDetail = ()=>{
    return(
        <>
        <div className="container-fluid bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-12 px-0">
                        <nav class="pt-md-3" aria-label="Breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><a href="job-board-home-v1.html">Home</a></li>
                                <li class="breadcrumb-item"><a href="job-board-blog.html">Blog</a></li>
                                <li class="breadcrumb-item active" aria-current="page">15 Tips for a Better Resume</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container blogDetailPage py-md-5 py-4">
                <div className="row">
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 blogHeading mb-3 px-0">15 Tips for a Better Resume</div>
                            <div className="col-12 blogSubHeading mb-md-4 mb-3 px-0">
                                Elegance is a fundamental concept that is deeply embedded in our lives and work. 
                                Is there a universal definition of elegance?
                            </div>
                            <div className="col-12 px-0">
                                <div className="row align-items-center flex-column">
                                    <div className="col-12 mb-md-5 mb-3 blogImg">
                                        <img src={blogImg} className='w-100 h-auto rounded-3 shadow-sm' alt="blog-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 px-0">
                                <div className="row">
                                    <div className="col-8">
                                        <div className="row">
                                            <div className="col-12 blogHeadings mb-3">A mix of practicality, subjectivity, and formality</div>
                                            <div className="col-12 blogTexts mb-md-4 mb-3">
                                                In software, as in other domains, the word elegant is imbued with power. 
                                                I’ve marveled at how elegance manifests in many forms and have always sought elegance in my work. 
                                                But to appreciate elegance, one has to keep an open mind about whether it’s always worth attaining.
                                            </div>
                                            <div className="col-12 blogTexts mb-md-5 mb-4">
                                                Are elegant solutions more understandable and maintainable? Are elegant words clearer and more powerful? 
                                                Are elegant designs easier to use? Is elegant software architecture easier to implement? In fact, 
                                                there is a difference between practicality, simplicity, usability, and elegance, 
                                                and the desirability of each attribute does vary.
                                            </div>
                                            <div className="col-12 blogHeadings mb-3">First, what is elegance?</div>
                                            <div className="col-12 blogTexts mb-4">
                                                Let’s go looking for it. There is particularly pure elegance in math. 
                                                Euler’s identity is a poster child, conveying so much, yet in such a compact form:
                                            </div>
                                            {/* <div className="col-8 mb-md-5 mb-4 blogImg">
                                                <img src={blogImg2} className='w-100 h-auto' alt="blog-img" />
                                            </div> */}
                                            <div className="col-12 blogTexts mb-4">
                                                Poetry also is an exercise in textual elegance, 
                                                as in this stanza from e.e. cumming’s anyone lived in a pretty how town:
                                            </div>
                                            <div className="col-12 blogHeadings mb-3">Lorem ipsum dolor sit amet consectetur.</div>
                                            <div className="col-12 blogTexts mb-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Labore, quo dolorem tenetur officia, nostrum aperiam dolorum mollitia perferendis maiores doloremque quidem quaerat ipsum facilis consequuntur, 
                                                repudiandae dolore ad! Doloribus veritatis, laudantium debitis quia ad iste recusandae atque tenetur, 
                                                itaque natus repellat facere ipsam cupiditate quis dignissimos corporis, iure sequi? Similique.
                                            </div>
                                            <div className="col-12 blogTexts mb-4">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Labore, quo dolorem tenetur officia, nostrum aperiam dolorum mollitia perferendis maiores doloremque quidem quaerat ipsum facilis consequuntur, 
                                                repudiandae dolore ad! Doloribus veritatis, laudantium debitis quia ad iste recusandae atque tenetur, 
                                                itaque natus repellat facere ipsam cupiditate quis dignissimos corporis, iure sequi? Similique.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="row mx-0 gap-3">
                                            <div className="col-12 shadow-sm rounded-3 p-3 bg-white">
                                                <div className="input-group mb-3">
                                                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                                                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                                                </div>
                                            </div>
                                            <div className="col-12 shadow-sm rounded-3 p-3 bg-white">
                                                <div className="row mx-0">
                                                    <div className="col-12">
                                                        <div className="row align-items-start">
                                                            <div className="col-auto userImg p-0 mt-1">
                                                                <img src={userImg} alt="user-img" />
                                                            </div>
                                                            <div className="col">
                                                                <div className="row flex-column">
                                                                    <div className="col userName">Lee Fischman</div>
                                                                    <div className="col blogTimeDate">May 4, 2023 <span>04:28PM</span></div>
                                                                    <div className="col pt-2">
                                                                        <div className="row gap-3 mx-0">
                                                                            <div className="col-auto socialIcon">
                                                                                <img src={likeImg} alt="" />
                                                                            </div>
                                                                            <div className="col-auto socialIcon">
                                                                                <img src={chatImg} alt="" />
                                                                            </div>
                                                                            <div className="col-auto socialIcon">
                                                                                <img src={shareImg} alt="" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 shadow-sm rounded-3 p-3 bg-white">
                                                <div className="row">
                                                    <div className="col-12 cardHeading">Recent Posts</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-md-5">
                            <div className="col-12 sectionHeading mb-4 px-0">5 Comments</div>
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 mb-4 userCommentBox">
                                        <div className="row align-items-start">
                                            <div className="col-auto userImg mt-1">
                                                <img src={userImg} className='w-100 h-auto' alt="user-img" />
                                            </div>
                                            <div className="col">
                                                <div className="row flex-column">
                                                    <div className="col userName">Allen Smith</div>
                                                    <div className="col">
                                                        <div className="row align-items-center gap-4">
                                                            <div className="col-auto timeDateText">
                                                                <span>Jun 11, 2022</span> at <span>6:01am</span>
                                                            </div>
                                                            <div className="col">
                                                                <span className='replyBtn'>Reply</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col commentText mt-2 d-none d-md-block">
                                                        Satisfied conveying a dependent contented he gentleman agreeable do be. 
                                                        Warrant private blushes removed an in equally totally if. 
                                                        Delivered dejection necessary objection do Mr prevailed. 
                                                        Mr feeling does chiefly cordial in do.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 commentText mt-2 px-0 d-md-none">
                                                Satisfied conveying a dependent contented he gentleman agreeable do be. 
                                                Warrant private blushes removed an in equally totally if. 
                                                Delivered dejection necessary objection do Mr prevailed. 
                                                Mr feeling does chiefly cordial in do.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mb-4 userCommentBox">
                                        <div className="row align-items-start">
                                            <div className="col-auto userImg mt-1">
                                                <img src={userImg} className='w-100 h-auto' alt="user-img" />
                                            </div>
                                            <div className="col">
                                                <div className="row flex-column">
                                                    <div className="col userName">Louis Ferguson</div>
                                                    <div className="col">
                                                        <div className="row align-items-center gap-4">
                                                            <div className="col-auto timeDateText">
                                                                <span>Jun 11, 2022</span> at <span>6:01am</span>
                                                            </div>
                                                            <div className="col">
                                                                <span className='replyBtn'>Reply</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col commentText mt-2 d-none d-md-block">
                                                        Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. 
                                                        Large above be to means. Dashwood does provide stronger is. 
                                                        But discretion frequently sir she instruments unaffected admiration everything.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 commentText mt-2 d-md-none px-0">
                                                Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. 
                                                Large above be to means. Dashwood does provide stronger is. 
                                                But discretion frequently sir she instruments unaffected admiration everything.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 userCommentBox">
                                        <div className="row align-items-start">
                                            <div className="col-auto userImg mt-1">
                                                <img src={userImg} className='w-100 h-auto' alt="user-img" />
                                            </div>
                                            <div className="col">
                                                <div className="row flex-column">
                                                    <div className="col userName">Frances Guerrero</div>
                                                    <div className="col">
                                                        <div className="row align-items-center gap-4">
                                                            <div className="col-auto timeDateText">
                                                                <span>Jun 11, 2022</span> at <span>6:01am</span>
                                                            </div>
                                                            <div className="col">
                                                                <span className='replyBtn'>Reply</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col commentText mt-2 d-none d-md-block">
                                                        Required his you put the outlived answered position. 
                                                        A pleasure exertion if believed provided to. All led out world this music while asked. 
                                                        Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. 
                                                        I think on style child of. Servants moreover in sensible it ye possible.
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-12 commentText mt-2 d-md-none px-0">
                                                Required his you put the outlived answered position. 
                                                A pleasure exertion if believed provided to. All led out world this music while asked. 
                                                Paid mind even sons does he door no. Attended overcame repeated it is perceived Marianne in. 
                                                I think on style child of. Servants moreover in sensible it ye possible.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-md-5 mt-4">
                            <div className="col-12 sectionHeading mb-md-4 mb-3 px-0">Leave a reply</div>
                            <div className="col-12 px-0">
                                <form className="row g-md-3 g-2 commentForm">
                                    <div className="col-md-6">
                                        <label className="form-label">Name *</label>
                                        <input type="text" className="form-control" aria-label="First name"/>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label">Email *</label>
                                        <input type="email" className="form-control"/>
                                    </div>
                                        <div className="col-md-12">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Save my name and email in this browser for the next time I comment. </label>
                                            </div>
                                        </div>
                                    <div className="col-12">
                                        <label className="form-label">Your Comment *</label>
                                        <textarea className="form-control" rows="3"></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-primary">Post comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogDetail