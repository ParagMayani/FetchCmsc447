function post(){
    //var likes, dislikes, post_content, time,category, userID; //declare variables for post data



    //fetch api call
    //database call to assign variables to 

    //post_content = "fuck you ";
    var package = '       <div class="bg-white border mt-2">\
    <div>\
        <div class="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">\
            <div class="d-flex flex-row align-items-center feed-text px-2">\
                <div class="d-flex flex-column flex-wrap ml-2"><span class="text-black-50 time">40 minutes ago</span></div>\
            </div>\
            <div class="feed-icon px-2"><i class="fa fa-ellipsis-v text-black-50"></i></div>\
        </div>\
    </div>\
    <div class="p-2 px-3"><span id = "post">test</span></div>\
    <div class="d-flex justify-content-end socials p-2 py-3"><i class="fa fa-arrow-up">01</i><i class="fa fa-arrow-down">21</i></div>\
</div> ';
    document.getElementById("test_post").innerHTML = package;

}
console.log("Post was called");
//export default post;