const { JSDOM } = require("jsdom");
const axios = require('axios');


// async function mostrarTabla()  {
//     console.log("entra a la funcion");
    
//   try {
//     const { data } = await axios.get("https://old.reddit.com/r/programming/");
//     const dom = new JSDOM(data, {
//       runScripts: "dangerously",
//       resources: "usable"
//     });
//     const { document } = dom.window;
//     const firstPost = document.querySelector("div > div.midcol > div.arrow");
//     console.log(firstPost);
//     firstPost.click();
//     const isUpvoted = firstPost.classList.contains("upmod");
//     const msg = isUpvoted
//       ? "Post has been upvoted successfully!"
//       : "The post has not been upvoted!";

//       console.log(msg);
//   } catch (error) {
//     throw error;
//   }
// };



function iniciar(){
  const div = document.querySelector("div");
  console.log(div);


}


window.onload = iniciar;