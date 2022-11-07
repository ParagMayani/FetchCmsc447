import './fetch.css'

//FirstName:string
//LastName:String
//Age
//Academics(College, Major, Coursese, GPA)
//Desired_Job(Industry, Field, Position)
//Hobbies(VIdeo_Games, Sports, Music)

function Create_Profile(props){
    return (
        <section class='Profile_Creation'>
            Profile Createion
            <form action=''>
                <label for="FirstName">First Name: </label><br></br>
                <input type="text"></input><br></br>
                <label for="LastName">Last Name: </label><br></br>
                <br></br>
                <input type="text"></input><br></br>
                <input type="text"></input><br></br>
                <input type="submit" value="Submit"></input>
            </form>

        </section>
    );
}
export default Create_Profile;