

import React from "react";

const Post = (data) => {
    return (
        <>
            <div className="bg-white border mt-2">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2">
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="text-black-50 time">40 minutes ago</span></div>
                                </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                            </div>
                        </div>
                    <div className="feed-image p-2 px-3"><span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</span></div>
                <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-arrow-up">01</i><i className="fa fa-arrow-down">21</i></div>
            </div>
        </>
    );
}

export default Post;