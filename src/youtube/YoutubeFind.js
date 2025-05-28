import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect, Fragment } from "react";
import { fetchYouTubeFind } from "../actions/youtubueActions";
import {Link} from "react-router-dom";

function YoutubeFind() {

    const dispatch = useDispatch();
    const [fd, setfd] = useState("부산");
    useEffect(() => {
        dispatch(fetchYouTubeFind(fd));
    }, [fd]);
    const movie = useSelector(state => state.youtubes.movie_data);
    return (
        <>
            <div className="breadcumb-area" style={{backgroundImage: "url(/img/bg-img/breadcumb.jpg)"}}>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12">
                            <div className="bradcumb-title text-center">
                                <h2>동영상 검색</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="breadcumb-nav mt-4">
                <div className="container">
                    <div className="row">
                        <input type="text" className={"input-group-sm"} width={"20"} onChange={(e) => setfd(e.target.value)}/>
                        <button className={"btn-sm btn-info"}>검색</button>
                    </div>
                </div>
            </div>
            <section className="archive-area section_padding_80">
                <div className="container">
                    <div className="row">
                        {
                            movie && movie.map((m) =>
                                <div className="col-12 col-md-6 col-lg-4">
                                    <div className="single-post wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="post-thumb">
                                            <iframe src={"http://www.youtube.com/embed/" + m.id.videoId}></iframe>
                                        </div>
                                        <div className="post-content">
                                            <h4 className="post-headline">{m.snippet.title}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default YoutubeFind;