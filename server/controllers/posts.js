export const getPosts = (request, response) => {
    response.send("Life works!");
 }

 export const createPost = (request, response) => {
   response.send(JSON.stringify({title: ''}))
 }