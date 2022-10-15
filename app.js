import axios from "axios";

const getData = async function(number){
    const {data:data1} = await axios(`https://jsonplaceholder.typicode.com/users/${number}`)
    const {data:posts} = await axios(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
    console.log("data1:", data1, "posts:", posts[0])
}
export default getData;