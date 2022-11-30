

import React from "react";
import Posts from "../Posts";

const Post = ({post}) => {
    return (
        <>
            <div className="bg-white border mt-2">
                <div>
                    <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                        <div className="d-flex flex-row align-items-center feed-text px-2">
                            <div className="d-flex flex-column flex-wrap ml-2"><span className="text-black-50 time">{post.created_on}</span></div>
                        </div>
                        <div class="dropdown show">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  </a>

  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                    </div>
                    <div className="feed-image p-2 px-3"><span>{post.description}</span></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><button><i className="fa fa-arrow-up">{post.likes}</i></button><button><i className="fa fa-arrow-down">{post.dislikes}</i></button></div>
                </div>
            </div>
        </>
    );
}

export default Post;