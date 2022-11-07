import './fetch.css';
import Reply from './reply';


//Sample reply
//Sample reply
//Sample reply

//Sample Thread

function Thread(props){
    var lis = []

    return (
    <section id='thread'>
        <div class='thread_header'>
            <p class='bar1'></p>
            <div class='title'>{props.title}Title</div>
            <div class='date'>{props.date}Date</div>
            <p class='bar1'></p>
            <div class='views'>View: 23{props.view}</div>
            <div class='bar2'></div>
        </div>
        
        
        <section class='thread_content_box'>
            <div class='thread_article'>
                {props.content}
                Sample Thread going to place here
            </div>
            <button class='like_button'>Paw</button>
        </section>
        
        <p class='bar1'></p>
        <section class='reply'>
            Reply: 
            <Reply></Reply>
        </section>
        <p class='bar1'></p>
        <section class="reply_editor">
            <button class="send_button">
                Reply
            </button>
      <p><textarea name="body" placeholder="Comment"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
        </section>
        <section class = 'forum'>

        </section>
    </section>
    );
}


export default Thread;