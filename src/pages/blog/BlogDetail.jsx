import React from 'react'
import './style.scss'
import userImg from '../../assets/img/avatar.png'
import likeImg from '../../assets/img/like.svg'
import chatImg from '../../assets/img/chat.svg'
import shareImg from '../../assets/img/Share.svg'
import blogImg from '../../assets/img/demo-blog.jpg'
import blogImg2 from '../../assets/img/demo-blog-2.webp'

const BlogDetail = ()=>{
    return(
        <>
        <div className="container blogDetailPage py-5">
            <div className="row">
                <div className="col-8 mx-auto">
                    <div className="row">
                        <div className="col-12 blogHeading mb-3">On the nature of elegance</div>
                        <div className="col-12 blogSubHeading mb-4">
                            Elegance is a fundamental concept that is deeply embedded in our lives and work. 
                            Is there a universal definition of elegance?
                        </div>
                        <div className="col-12 mb-3">
                            <div className="row align-items-center">
                                <div className="col-auto userImg p-0">
                                    <img src={userImg} alt="user-img" />
                                </div>
                                <div className="col">
                                    <div className="row flex-column">
                                        <div className="col userName">Lee Fischman</div>
                                        <div className="col blogTimeDate">May 4, 2023 <span>04:28PM</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mb-5 border-top border-light border-opacity-75 border-bottom p-3">
                            <div className="row mx-0 gap-2">
                                <div className="col">
                                    <div className="row gap-4">
                                        <div className="col-auto likeIcon">
                                            <img src={likeImg} alt="" />
                                        </div>
                                        <div className="col-auto chatIcon">
                                            <img src={chatImg} alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-auto shareImg">
                                    <img src={shareImg} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="row align-items-center flex-column">
                                <div className="col-8 mb-5 blogImg">
                                    <img src={blogImg} className='w-100 h-auto' alt="blog-img" />
                                </div>
                                <div className="col-12 blogHeadings mb-3">A mix of practicality, subjectivity, and formality</div>
                                <div className="col-12 blogTexts mb-4">
                                    In software, as in other domains, the word elegant is imbued with power. 
                                    I’ve marveled at how elegance manifests in many forms and have always sought elegance in my work. 
                                    But to appreciate elegance, one has to keep an open mind about whether it’s always worth attaining.
                                </div>
                                <div className="col-12 blogTexts mb-5">
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
                                <div className="col-8 mb-5 blogImg">
                                    <img src={blogImg2} className='w-100 h-auto' alt="blog-img" />
                                </div>
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
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 sectionHeading mb-4">5 Comments</div>
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
                                                <div className="col commentText mt-2">
                                                    Satisfied conveying a dependent contented he gentleman agreeable do be. 
                                                    Warrant private blushes removed an in equally totally if. 
                                                    Delivered dejection necessary objection do Mr prevailed. 
                                                    Mr feeling does chiefly cordial in do.
                                                </div>
                                            </div>
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
                                                <div className="col commentText mt-2">
                                                    Water timed folly right aware if oh truth. Imprudence attachment him his for sympathize. 
                                                    Large above be to means. Dashwood does provide stronger is. 
                                                    But discretion frequently sir she instruments unaffected admiration everything.
                                                </div>
                                            </div>
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
                                                <div className="col commentText mt-2">
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
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-12 sectionHeading mb-4">Leave a reply</div>
                        <div className="col-12">
                            <form class="row g-3 commentForm">
                                <div class="col-md-6">
                                    <label class="form-label">Name *</label>
                                    <input type="text" class="form-control" aria-label="First name"/>
                                </div>
                                <div class="col-md-6">
                                    <label class="form-label">Email *</label>
                                    <input type="email" class="form-control"/>
                                </div>
                                    <div class="col-md-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                            <label class="form-check-label" for="flexCheckDefault">Save my name and email in this browser for the next time I comment. </label>
                                        </div>
                                    </div>
                                <div class="col-12">
                                    <label class="form-label">Your Comment *</label>
                                    <textarea class="form-control" rows="3"></textarea>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">Post comment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default BlogDetail