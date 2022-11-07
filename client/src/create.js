
function Create(props){
    return (
        <section class='create_thread'>
            <form>
                <p><input type="text" name="title" placeholder="title"/></p>
                <p><textarea name="body" placeholder="Comment"></textarea></p>
                <p><input type="submit" value="Create"></input></p>
            </form>
        </section>
    );
}

export default Create;