import './fetch.css'

//FirstName:string
//LastName:String
//Age
//Academics(College, Major, Coursese, GPA)
//Desired_Job(Industry, Field, Position)
//Hobbies(VIdeo_Games, Sports, Music)

function Create_Profile(props){
    return (
        <section class='profile_creation'>
            Profile Createion
            <form action=''>
                <label for="FirstName">First Name: </label><input type="text" placeholder='John'></input><br></br>
                <label for="LastName">Last Name: </label><input type="text" placeholder='Doe'></input><br></br>
                <br></br>
                <label for="Age">Age: </label><input type="text" placeholder='17 ~ 23'></input><br></br>
                <label for="Academic">Academic: </label><br></br>
                <input type="text" placeholder='College'></input><br></br>
                <input type="text" placeholder='Major'></input><br></br>
                <label for="Desired_Job">Job: </label><br></br>
                <input type="text" placeholder='Industry'></input><br></br>
                <label for="Hobbies" >Hobbies: </label><br></br>
                <input type="text" placeholder='Video_Games, Sports, Music'></input><br></br>

                
                <input type="submit" value="Submit"></input>
            </form>

        </section>
    );
}
export default Create_Profile;