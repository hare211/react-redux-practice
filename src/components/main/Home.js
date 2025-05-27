import { Fragment, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMainData } from "../../actions/mainActions";

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchMainData());
    }, []) // vue -> mounted()

    const mainData = useSelector(state => state.mains.main_data);
    return (
        <>
            <section className="categories_area clearfix" id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".3s">
                                <img src="img/catagory-img/1.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>부산 맛집</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".6s">
                                <img src="img/catagory-img/2.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>부산 동영상</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="single_catagory wow fadeInUp" data-wow-delay=".9s">
                                <img src="img/catagory-img/3.jpg" alt=""/>
                                <div className="catagory-title">
                                    <a href="#">
                                        <h5>부산 명소</h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog_area section_padding_0_80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-8">
                            <div className="row">
                                <div className="col-12">
                                    <div className="single-post wow fadeInUp" data-wow-delay=".2s">
                                        <div className="post-thumb">
                                            <img src={ mainData.mp && "https://www.menupan.com" + mainData.mp.poster} alt=""/>
                                        </div>
                                        <div className="post-content">
                                            <div className="post-meta d-flex">
                                                <div className="post-author-date-area d-flex">
                                                    <div className="post-author">
                                                        <a href="#">{ mainData.mp && mainData.mp.type }</a>
                                                    </div>
                                                    <div className="post-date">
                                                        <a href="#">{ mainData.mp && mainData.mp.score }</a>
                                                    </div>
                                                </div>
                                                <div className="post-comment-share-area d-flex">
                                                    <div className="post-favourite">
                                                        <a href="#"><i className="fa fa-heart-o" aria-hidden="true"></i>{ mainData.mp && mainData.mp.likecount }</a>
                                                    </div>
                                                    <div className="post-comments">
                                                        <a href="#"><i className="fa fa-comment-o" aria-hidden="true"></i> { mainData.mp && mainData.mp.hit }</a>
                                                    </div>
                                                    <div className="post-share">
                                                        <a href="#"><i className="fa fa-share-alt" aria-hidden="true"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a href="#">
                                                <h2 className="post-headline">{ mainData.mp && mainData.mp.name }</h2>
                                            </a>
                                            <p>{ mainData.mp && mainData.mp.theme }</p>
                                            <a href="#" className="read-more">Continue Reading..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;