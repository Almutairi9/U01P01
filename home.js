const learning = [
  {
    teacherName: "Rawan Almutairi",
    teacherImage: "user.png",
    cousreName: "Information Tecnology",
    cousreImage: "itimg.jpg",
    cousrebackgroundImg: "itimg.jpg",
    cousredescriptionForSubject:
      "The field of information technology, or IT, covers the support, administration, and design of telecommunications and computer systems. Some positions in this field include system analysts, software programmers, computer scientists, computer support specialists, and network and database administrators.", 
    cousredescriptionForSecondSubject: "", 
    url: "https://www.youtube.com/embed/gkOdIZwUKfM",
    secoundurl: "https://www.youtube.com/embed/bSsnjFzaNK8",
  }, 
  {
    teacherName: "Suha Alhomaid",
    teacherImage: "user.png",
    cousreName: "Math",
    cousreImage: "mathimg.jpg", 
    cousrebackgroundImg: "mathimg.jpg",
    cousredescriptionForSubject:
      " Mathematics is the science that deals with the logic of shape, quantity, and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports ",
    cousredescriptionForSecondSubject: "",
    url: "https://www.youtube.com/embed/TMubSggUOVE",
    secoundurl: "https://www.youtube.com/embed/grnP3mduZkM",
  },
  {
    teacherName: "Rawan Almutairi",
    teacherImage: "user.png",
    cousreName: "Art",
    cousreImage: "artimg.jpg",
    cousrebackgroundImg: "artimg.jpg",
    cousredescriptionForSubject:
      " Introduction to Art: Concepts & Techniques is an art appreciation course created for individuals without any artistic background. ... The main emphasis of the course is to teach you hands-on studio art techniques as you conduct personal research and explore your own creativity.",
    // cousrebackgroundSecondImg: "artimg.jpg",
    cousredescriptionForSecondSubject: "",
    url: "https://www.youtube.com/embed/gaTLt9HKzmk",
    secoundurl: "https://www.youtube.com/embed/gaTLt9HKzmk",
  },
  {
    teacherName: "Rawan Almutairi",
    teacherImage: "user.png",
    cousreName: "Biology  ",
    cousreImage: "bioolgyimg.jpg",
    cousrebackgroundImg: "bioolgyimg.jpg",
    cousredescriptionForSubject:
      "Biology is the study of living things. It encompasses the cellular basis of living things, the energy metabolism that underlies the activities of life, and the genetic basis for inheritance in organisms. ... Types of practical biology include plant breeding, wildlife management, medical science, and crop production.",
    // cousrebackgroundSecondImg: "bioolgyimg.jpg",
    cousredescriptionForSecondSubject: "",
    url: "https://www.youtube.com/embed/Q8ijKtdIRMQ",
    secoundurl: "https://www.youtube.com/embed/-tJmEIU1RgQ",
  },
  {
    teacherName: "Rawan Almutairi",
    teacherImage: "user.png",
    cousreName: "Chemistry",
    cousreImage: "chemistryimg.jpg",
    cousrebackgroundImg: "chemistryimg.jpg",
    cousredescriptionForSubject:
      " Chemistry is the study of matter and the chemical reactions between substances. Chemistry is also the study of matter's composition, structure, and properties. Chemistry is sometimes called “the central science,” because it bridges physics with other natural sciences, such as geology and biology.",
    // cousrebackgroundSecondImg: "chemistryimg.jpg",
    cousredescriptionForSecondSubject: "",
    url: "https://www.youtube.com/embed/Rd4a1X3B61w",
    secoundurl: "https://www.youtube.com/embed/6Q-pYtR5I90",
  },
  {
    teacherName: "Rawan Almutairi",
    teacherImage: "user.png",
    cousreName: "English language ",
    cousreImage: "englishimg.jpg",
    cousrebackgroundImg: "englishimg.jpg",
    cousredescriptionForSubject:
      " English is thought to be one of the most important languages in the world. There are many reasons why English is so important. One of the reasons is that English is spoken as the first language in many countries. There are 104 countries where English is spoken as the first language.",
    cousrebackgroundSecondImg: "englishimg.jpg",
    cousredescriptionForSecondSubject: "",
    url: "https://www.youtube.com/embed/WlNiUQwqflE",
    secoundurl: "https://www.youtube.com/embed/WlNiUQwqflE",
  },
];

const render = () => {
  $(".cards").html("");
  for (let index = 0; index < learning.length; index++) {
    $(".cards").append(` <div class ="card">
        <div class='divSubImg'><img  src= "${learning[index].cousreImage}" alt="IT-Subject"/></div>   
        <p class ="par"> ${learning[index].cousreName} </p>
        <button class = "btn success" id ="btn${index}"> Enroll </button>
         </div>`);
    $(`#btn${index}`).click(() => seeMore(index));
    // still we have to put vote faivorate **
  }
};
render();

// seeMore Function that will enroll the Course you have clicked

function seeMore(index) {
  $(".videoPro").hide();
  $(".cards").hide();
  $(".introduction").hide();
  console.log(learning[index]);
  const item = learning[index];
  $(".oneitem").append(` <div class ="secondLevelPage">
    <div class = "backgroundImg"><img src="${learning[index].cousrebackgroundImg}" alt="IT-Subject"/> </div>
    <div class ="courseUrl"><iframe src="${learning[index].url}"> </iframe></div> 
   <p class ="descriptionForSubject"> ${learning[index].cousredescriptionForSubject} </p>  
   <button class = "NextLecture" id = "NextLecture${index}"> Next Lecture </button> </div> `);
  $(`#NextLecture${index}`).click(() => secondLevel(index));

  render();
}

function secondLevel(index) {
  $(".descriptionForSubject").hide();
  $(".NextLecture").hide();
  $(".courseUrl").hide();
  console.log(learning[index]);
  const item = learning[index];
  $(".seconditme").append(` <div class ="takeQuizPage" >
    <div class = "backgroundSecondImg"><img src="${learning[index].cousrebackgroundSecondImg}" alt="IT-Subject"/> </div>
    <div class ="secondcourseUrl"><iframe src="${learning[index].secoundurl}"> </iframe></div> 
    <p class ="descriptionForSecondSubject"> ${learning[index].cousredescriptionForSecondSubject} </p> 
   <button class = "Submit" id ="Submit${index}"> Take quiz </button> </div> `);
  $(`#NextLecture${index}`).off("click");
  render();
}

const seeTecjers = () => {

  $(".Teachers").html("");
  $(".cards").hide();
  $(".videoPro").hide();
  for (let index = 0; index < learning.length; index++) {
    console.log(learning[index]);
    const item = learning[index];
    $(".Teachers").append(`<div class="teacher">
    <p class ="par">${learning[index].teacherName} </p> 
    <div class='divTeacherImg'><img src="${learning[index].teacherImage}" alt="teacher-image"/></div>  
    </div>`);
    $(`#Teacherbtn${index}`).click(() => seeTecjers(index));
  }
}; 
//seeTecjers(); إذا حيتها داخل الاقواس تطلع recution function too much loading ...
