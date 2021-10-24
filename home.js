const learning = [
  { cousreName: "Information Tecnology", cousreImage: "It.jpg" },
  { cousreName: "Math", cousreImage: "It.jpg" },
  { cousreName: "Art", cousreImage: "It.jpg" },
  { cousreName: "Information Tecnology", cousreImage: "It.jpg" },
  { cousreName: "Math", cousreImage: "It.jpg" },
  { cousreName: "Art", cousreImage: "It.jpg" }]
  

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


function seeMore(index){
    $(".videoPro").hide()
    $(".cards").hide()
    console.log(learning[index]);
    const item = learning[index]
    $(".oneitem").append(`  `)

}
