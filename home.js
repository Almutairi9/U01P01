let learning = JSON.parse(localStorage.getItem("learning")) || [

  {
    teacherName:
      "<b>Rawan Almutairi </b> </br></br> Information Technology Teacher",
    teacherImage: "user.png",
    cousreName: "Information Technology",
    cousreImage: "it.jpg",
    cousrebackgroundImg: "it.jpg",
    cousredescriptionForSubject: "The field of information technology, or IT, covers the support, administration, and design of telecommunications and computer systems. Some positions in this field include system analysts, software programmers, computer scientists, computer support specialists, and network and database administrators.",
    cousredescriptionForSecondSubject: "The field of information technology, or IT, covers the support, administration, and design of telecommunications and computer systems. Some positions in this field include system analysts, software programmers, computer scientists, computer support specialists, and network and database administrators.",
    url: "https://www.youtube.com/embed/gkOdIZwUKfM",
    secoundurl: "https://www.youtube.com/embed/bSsnjFzaNK8",
    fav :false ,
  },
  {
    teacherName: "<b>Suha Alhomaid</b> </br></br> Math Teacher",
    teacherImage: "user.png",
    cousreName: "Math",
    cousreImage: "mathimg.jpg",
    // cousrebackgroundImg: "mathimg.jpg",
    cousredescriptionForSubject:
      " Mathematics is the science that deals with the logic of shape, quantity, and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports ",
    cousredescriptionForSecondSubject: " Mathematics is the science that deals with the logic of shape, quantity, and arrangement. Math is all around us, in everything we do. It is the building block for everything in our daily lives, including mobile devices, architecture (ancient and modern), art, money, engineering, and even sports ",
    url: "https://www.youtube.com/embed/TMubSggUOVE",
    secoundurl: "https://www.youtube.com/embed/grnP3mduZkM",
    fav : false, 
  },
  {
    teacherName: "<b>Rana Almutairi</b> </br></br> Art Teacher", 
    teacherImage: "user.png",
    cousreName: "Art",
    cousreImage: "artimg.jpg",
    cousrebackgroundImg: "artimg.jpg",
    cousredescriptionForSubject:"Introduction to Art: <br><br> Concepts & Techniques is an art appreciation course created for individuals without any artistic background. ... <br><br>The main emphasis of the course is to teach you hands-on studio art techniques as you conduct personal research and explore your own creativity.",
    cousredescriptionForSecondSubject: " Introduction to Art: <br><br> Concepts & Techniques is an art appreciation course created for individuals without any artistic background. ... <br><br>The main emphasis of the course is to teach you hands-on studio art techniques as you conduct personal research and explore your own creativity.",
    url: "https://www.youtube.com/embed/gaTLt9HKzmk",
    secoundurl: "https://www.youtube.com/embed/gaTLt9HKzmk",
    fav: false,
  },
  {
    teacherName: "<b>Shahad Almutairi</b> </br></br> Biology Teacher",
    teacherImage: "user.png",
    cousreName: "Biology  ",
    cousreImage: "bioolgyimg.jpg",
    cousrebackgroundImg: "bioolgyimg.jpg",
    cousredescriptionForSubject:
      "Biology is the study of living things. It encompasses the cellular basis of living things, the energy metabolism that underlies the activities of life, and the genetic basis for inheritance in organisms. ... Types of practical biology include plant breeding, wildlife management, medical science, and crop production.",
    // cousrebackgroundSecondImg: "bioolgyimg.jpg",
    cousredescriptionForSecondSubject: "Biology is the study of living things. It encompasses the cellular basis of living things, the energy metabolism that underlies the activities of life, and the genetic basis for inheritance in organisms. ... Types of practical biology include plant breeding, wildlife management, medical science, and crop production.",
    url: "https://www.youtube.com/embed/Q8ijKtdIRMQ",
    secoundurl: "https://www.youtube.com/embed/-tJmEIU1RgQ",
    fav :false ,
  },
  {
    teacherName: "<b>Ghadeer Alsalme</b> </br></br> Chemistry Teacher",
    teacherImage: "user.png",
    cousreName: "Chemistry",
    cousreImage: "chemistryimg.jpg",
    cousrebackgroundImg: "chemistryimg.jpg",
    cousredescriptionForSubject:
      " Chemistry is the study of matter and the chemical reactions between substances. Chemistry is also the study of matter's composition, structure, and properties. Chemistry is sometimes called ???the central science,??? because it bridges physics with other natural sciences, such as geology and biology.",
    // cousrebackgroundSecondImg: "chemistryimg.jpg",
    cousredescriptionForSecondSubject: " Chemistry is the study of matter and the chemical reactions between substances. Chemistry is also the study of matter's composition, structure, and properties. Chemistry is sometimes called ???the central science,??? because it bridges physics with other natural sciences, such as geology and biology.", 
    url: "https://www.youtube.com/embed/Rd4a1X3B61w",
    secoundurl: "https://www.youtube.com/embed/6Q-pYtR5I90",
    fav :false ,
  },
  {
    teacherName: "<b>Ahmad Ali</b> </br></br> English language Teacher",
    teacherImage: "user.png",
    cousreName: "English language ",
    cousreImage: "englishimg.jpg",
    cousrebackgroundImg: "englishimg.jpg",
    cousredescriptionForSubject:
      " English is thought to be one of the most important languages in the world. There are many reasons why English is so important. One of the reasons is that English is spoken as the first language in many countries. There are 104 countries where English is spoken as the first language.",
    // cousrebackgroundSecondImg: "englishimg.jpg",
    cousredescriptionForSecondSubject:  " English is thought to be one of the most important languages in the world. There are many reasons why English is so important. One of the reasons is that English is spoken as the first language in many countries. There are 104 countries where English is spoken as the first language. ",
    url: "https://www.youtube.com/embed/WlNiUQwqflE",
    secoundurl: "https://www.youtube.com/embed/WlNiUQwqflE",
    fav :false,
  },
];

localStorage.setItem("learning", JSON.stringify(learning));

const render = () => {
  $(".cards").html("");
  for (let index = 0; index < learning.length; index++) {
    $(".cards").append(` <div class ="card">
        <div class='divSubImg'><img  src= "${learning[index].cousreImage}" alt="IT-Subject"/></div>   
        <p class ="par"> ${learning[index].cousreName} </p>
        <button class = "btn success" id ="btn${index}"> Enroll </button>
        <button class="Book success" id ="Book${index}">Bookmark </button> 
         </div>`);
    $(`#btn${index}`).click(() => seeMore(index));
    $(`#Book${index}`).click(() => favoriteCard(index));

    // if(item.Book === true){
    //   $("#Book"+i).removeClass("Book")
    //   $("#Book"+i).addClass("Book")
    // } 
  }
};
render(); 

// function favoriteCard(index) {
//   cards[index].Book = !cards[index].Book
//   localStorage.setItem("arr",JSON.stringify(cards))
//   }
//   render(); 


// seeMore Function that will enroll the Course you have clicked

function seeMore(index) {
  $(".videoPro").hide();
  $(".cards").hide();
  $(".introduction").hide();
  console.log(learning[index]);
  const item = learning[index];
  $(".oneitem").append(` <div class ="secondLevelPage">
    <div class ="courseUrl"><iframe class='courseUrFlrame' src="${learning[index].url}"> </iframe></div> 
   <p class ="descriptionForSubject"> ${learning[index].cousredescriptionForSubject} </p>  
   <button class = "NextLecture success" id = "NextLecture${index}"> Next Lecture </button> </div> `);
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
    <div class ="secondcourseUrl"><iframe class='courseUrFlrame' src="${learning[index].secoundurl}"> </iframe></div> 
    <p class ="descriptionForSecondSubject"> ${learning[index].cousredescriptionForSecondSubject} </p> 
   <button class = "Submit success" id ="Submit${index}"> Take quiz </button> </div> `);
  $(`#NextLecture${index}`).off("click");
  render();
}

const seeTecjers = () => {
  $(".Teachers").html("");
  $(".cards").hide();
  $(".videoPro").hide();
  $(".introduction").hide();
  $(".oneitem").hide();
  $(".seconditme").hide();
  for (let index = 0; index < learning.length; index++) {
    console.log(learning[index]);
    const item = learning[index];
    $(".Teachers").append(`<div class="teacher">
    <div class='divTeacherImg'><img src="${learning[index].teacherImage}" alt="teacher-image"/></div> 
    <p class ="teachersName">${learning[index].teacherName} </p> 
    </div>`);
    $(`#Teacherbtn${index}`).click(() => seeTecjers(index));
  }
};
//seeTecjers(); ?????? ?????????? ???????? ?????????????? ???????? recution function too much loading ...

function favCar(i) {
  $(".dynamicPage").hide();
  $(".descPage").hide();
  mainArray[i].isFav = !mainArray[i].isFav;
  localStorage.setItem("mainArray", JSON.stringify(mainArray));
  render();
  mainArray.forEach((item, i) => {
    if (item.isFav === true) {
      $(".favoriteP").append(`<div class="card">
      <div class ="imgContainer"><img id= "cardImg-${i}" width= "300px" src="${item.imgCar}"/>
      </div>
      <div><h3 id= "cardName-${i}">${item.name}</h3>
      `)
    }
  });
}

$(".search_term").change(() => {
  const searchArr = learning.filter((item) => {
    return item.cousreName
      .toLowerCase().includes($(".search_term").val().toLowerCase()); 
  });
  console.log(searchArr);

      $(".cards").hide(); 
      // $(".oneitem").hide();
      // $(".seconditme").hide();
      // $(".Teachers").hide();
      $(".footer").hide();

  searchArr.forEach((item,index)=>{
      $(".cards").append(` <div class ="card">
        <div class='divSubImg'><img  src= "${learning[index].cousreImage}" alt="IT-Subject"/></div>   
        <p class ="par"> ${learning[index].cousreName} </p>
        <button class = "btn success" id ="btn${index}"> Enroll </button>
        <button class="Book success" id ="Book${index}">Bookmark </button> 
         </div>`); 
  })
  
});