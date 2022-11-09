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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac odio eu neque mattis varius posuere sit amet dui. Nunc dignissim purus eget tincidunt viverra. Vestibulum faucibus ex arcu, in lacinia tellus mollis id. Aliquam diam tellus, ultricies at aliquet a, interdum vitae lacus. Fusce nisi lectus, sollicitudin sit amet ultricies a, congue ut tortor. Aenean rhoncus, diam in cursus feugiat, massa odio facilisis lectus, ut tincidunt tellus ligula id nisi. Donec accumsan ornare risus, in volutpat nibh ultrices non. In finibus odio nisl, nec fermentum risus pulvinar sed. Maecenas hendrerit mollis metus, sed sollicitudin ante maximus id.

In tincidunt, libero porta fringilla dignissim, augue turpis dapibus orci, vel placerat sapien odio commodo felis. Phasellus sed diam posuere, rhoncus enim nec, hendrerit velit. Pellentesque a velit in mi auctor tempor vitae at purus. Proin volutpat tortor augue, eget feugiat nisi ultricies eu. Proin tellus dui, vestibulum sit amet mauris sed, auctor semper lorem. Donec vitae dolor at nulla malesuada venenatis. Maecenas eu tincidunt nulla. Mauris id tempus neque.

Curabitur tristique tortor ac scelerisque hendrerit. Duis mattis ex sed efficitur ultricies. Mauris ullamcorper, nibh quis sagittis rutrum, neque elit venenatis est, vel venenatis diam risus vel metus. Praesent sit amet elementum erat. Quisque et porttitor arcu. Nunc cursus, nisi non aliquet imperdiet, ante velit placerat justo, eu dignissim lorem risus id ligula. Nunc et ligula vestibulum, sagittis velit ut, molestie lacus. Vivamus elit turpis, tincidunt venenatis ipsum non, malesuada consequat odio. Pellentesque condimentum massa ut mauris faucibus, nec finibus dui tincidunt. Integer mollis bibendum felis, sit amet placerat sem posuere vitae. Fusce leo massa, faucibus vel dolor sed, eleifend condimentum tellus. Phasellus maximus sapien vel dolor commodo venenatis. Etiam finibus, turpis at blandit accumsan, nulla turpis venenatis nisl, in feugiat augue magna quis odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut sit amet quam pharetra dui feugiat pellentesque. Sed aliquet sapien eget risus vehicula tempor.

Nunc mollis convallis consectetur. Donec venenatis felis sed nisl consectetur feugiat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer tempor suscipit blandit. Sed sed condimentum diam. Sed scelerisque ornare tortor, ac volutpat neque scelerisque eget. Sed bibendum quam sit amet pharetra tempus. Nullam porta convallis dui eget sodales. Quisque dapibus ligula ut leo varius, at volutpat dui vulputate. Etiam laoreet bibendum eros, vitae sollicitudin nisl. Praesent eu massa quis diam viverra pretium. Praesent vulputate placerat tellus. Donec lorem sapien, fermentum quis scelerisque sed, pellentesque at erat.

In hac habitasse platea dictumst. Maecenas rutrum ultricies lectus non maximus. Proin orci sem, viverra sed tristique id, mattis vel ante. Praesent tristique varius auctor. Sed sit amet tellus sit amet nulla tincidunt finibus eget a ipsum. Donec id pulvinar neque, et accumsan nisl. Etiam ultricies dapibus molestie. Nunc eu massa ac orci sollicitudin laoreet.
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
      <p><textarea class='reply_textarea' name="body" placeholder="Comment"></textarea></p>
      <p><input type="submit" value="Create"></input></p>
        </section>
        <section class = 'forum'>

        </section>
    </section>
    );
}


export default Thread;