import './fetch.css'
import sample from './images/img_avatar.png'

//Forum structure
//ForumID| Name | list of Thread | Follower |
function Forum(props){
    const lis = [];
    return (
        <section id='forum'>
            <div class='bar1'></div>
            <div class='forum_name'>
                Sample
                <a href='/createThread'><button class='create_button'> + </button></a>
                </div>  
            <div class='bar1'></div>

            <div class='thread_list'>
                <a href= '/thread/{props.id}'>
                    <div href ='/thread/{props.id}' class="thread_box">
                        <img class='circle_img' src={sample} alt={sample}></img>
                        <div>{props.title}Title</div>
                        <div class='thread_date'>{props.date}date</div>
                    </div>
                </a>
            </div>
            <div class='thread_list'>
                <a href= '/thread/{props.id}'>
                    <div href ='/thread/{props.id}' class="thread_box">
                        <img class='circle_img' src={sample} alt={sample}></img>
                        <div>{props.title}Title</div>
                        <div class='thread_date'>{props.date}date</div>
                    </div>
                </a>
            </div>
            <div class='thread_list'>

            </div>
            <div class='thread_list'>

            </div>
            <div class='thread_list'>

            </div>
            <div class='thread_list'>

            </div>
        </section>
        
    );
}


export default Forum;