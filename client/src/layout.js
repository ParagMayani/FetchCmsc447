import './fetch.css'

function Header(){
    return (
        <header class="header_box">
                <section id="name_box">
                    <a class="main_name_text" href="/">Fetch</a>
                </section>
    
                <section id ="top_nav">
                    <div class = "nav_box">
                        <a class="nav_text" href="/">Home</a>
                    </div>
                    <div class= "nav_box">
                        <a>Board</a>
                    </div>
                    <div class = "nav_box">
    
                    </div>
                    
    
                    <section id="user_box">
                        <div class="nav_box">
                            <a>Login</a>
                        </div>
                    </section>
                        
                </section>
        </header>
    );
}

function Footer(){
    return (
        <footer>
            <section id = "footer">
                <p>CMSC447 Project</p>
                <p>copyright 2022</p>
            </section>
        </footer>
    );
}

function Content(){
    return (
        <div>
            <section id = "main_box">
                <section id="content_box">
                    <p id = "content"></p>
                </section>
            </section>
        </div>
    );
}

function App(){
    return (
        <div></div>
    );
}

function Thread(){
    return (
        <div></div>
    );
}

function Board(){
    return (
        <div></div>
    );
}

export default App;