import './fetch.css'
import sample from './images/img_avatar.png'

function Reply(props){
    return (
        <div class='reply_box'>

                reply content
                {props.reply}
                <img class='circle_img' src={sample}></img>
                
                <button class='reply_button'>
                    Comment
                </button>
                <button class='reply_button'>
                    Growls
                </button>
                <button class='reply_button'>
                    Howling
                </button>

                <p></p>

                <div class='reply_date'>Date</div>

            </div>
    );
}
export default Reply;