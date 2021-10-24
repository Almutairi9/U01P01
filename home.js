const learning = [
  { cousreName: "Information Tecnology", cousreImage: "It.jpg" , cousrebackgroundImg : "itimg.png", cousredescriptionForSubject: "The field of information technology, or IT, covers the support, administration, and design of telecommunications and computer systems. Some positions in this field include system analysts, software programmers, computer scientists, computer support specialists, and network and database administrators."},
  { cousreName: "Math", cousreImage: "It.jpg", cousrebackgroundImg : "itimg.png" ,cousredescriptionForSubject: " Mathematics is the science that deals with the logic of shape, quantity, and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports "},
  { cousreName: "Art", cousreImage: "It.jpg", cousrebackgroundImg : "itimg.png" ,cousredescriptionForSubject: " Introduction to Art: Concepts & Techniques is an art appreciation course created for individuals without any artistic background. ... The main emphasis of the course is to teach you hands-on studio art techniques as you conduct personal research and explore your own creativity." },
  { cousreName: "Biology  ", cousreImage: "It.jpg", cousrebackgroundImg : "itimg.png",cousredescriptionForSubject: "Biology is the study of living things. It encompasses the cellular basis of living things, the energy metabolism that underlies the activities of life, and the genetic basis for inheritance in organisms. ... Types of practical biology include plant breeding, wildlife management, medical science, and crop production." },
  { cousreName: "Chemistry", cousreImage: "It.jpg", cousrebackgroundImg : "itimg.png" ,cousredescriptionForSubject: " Chemistry is the study of matter and the chemical reactions between substances. Chemistry is also the study of matter's composition, structure, and properties. ... Chemistry is sometimes called “the central science,” because it bridges physics with other natural sciences, such as geology and biology." },
  { cousreName: "English language ", cousreImage: "It.jpg", cousrebackgroundImg : "itimg.png" ,cousredescriptionForSubject: " English is thought to be one of the most important languages in the world. There are many reasons why English is so important. One of the reasons is that English is spoken as the first language in many countries. There are 104 countries where English is spoken as the first language." }]
  
 
//  <iframe src="https://www.youtube.com/watch?v=2WB6RcY0MPc">
// </iframe> <div class ="videoCources"><video><source src="${learning[index].cousrevideoCources}" type=" "></video></div> youtube !!! 
 
const render = () => {
  $(".cards").html("");
  for (let index = 0; index < learning.length; index++) {
    $(".cards").append(` <div onclick='seeMore(${index})' class ="card" >
        <div class='divSubImg'><img  src= "${learning[index].cousreImage}" alt="IT-Subject"/></div>   
        <p class ="par"> ${learning[index].cousreName} </p>
        <button class = "btn"> Enroll </button>
         </div>`); // still we have to put vote faivorate **
  }
};
render();

// Enroll Function that enroll the Course you have clicked 
function seeMore(index){
    $(".videoPro").hide()
    $(".cards").hide()
    console.log(learning[index]);
    const item = learning[index]; 
    $(".oneitem").append(` <div onclick='takeQuiz(${index})' class ="quizPage" >
    <div class = "backgroundImg"><img src="${learning[index].cousrebackgroundImg}" alt="IT-Subject"/> </div>
   <p class ="descriptionForSubject"> ${learning[index].cousredescriptionForSubject} </p> 
   <button class = "more"> Read more </button> </div> `) 
   render();
}; 
