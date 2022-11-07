import './fetch.css'
import sample from './images/img_avatar.png'

function Board(props){
    return (
        <div>
            <section id="content_box">
        <section class = "thread_list_box">
        <div href='/{props.id}' class="forum_box">
            <h1>Forum Title</h1>
        </div>
        <a href= '/thread/{props.id}'>
            <div href ='/thread/{props.id}' class="thread_box">
                <img class='circle_img' src={sample}></img>
                <div>{props.title}Title</div>
                <a class='thread_date'>{props.date}date</a>
            </div>
        </a>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
    </section>
    <section class = "thread_list_box">
        <div class="thread_box">
            <h1>Forum Title</h1>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
    </section>
    <section class = "thread_list_box">
        <div class="thread_box">
            <h1>Forum Title</h1>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
    </section>
    <section class = "thread_list_box">
        <div class="thread_box">
            <h1>Forum Title</h1>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
        <div class="thread_box">
            <a>TItle</a>
            <a>Likes</a>
            <a>{props.date}</a>
        </div>
    </section>
    </section>
    </div>
    );
}

export default Board;