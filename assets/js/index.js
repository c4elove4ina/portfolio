

let background = document.querySelector("body")



let chek = document.getElementById("lightmode")
chek.onclick = function(){
    if (chek.checked == true){
  background.style.backgroundImage="url(./assets/images/kartofan.avif)"
  
}else{
    background.style.backgroundImage="url(./assets/images/background-light.png)"
}

}

let cards = [
    {
    title:"заголовок1",
    text: "просто текст",
    date: "30.01.24",
    ispublic:false
    },

    {
    title:"заголовок2",
    text:"просто текст",
    date: "30.01.24",
    ispublic:false
    },
    {
    title:"заголовок2",
    text:"просто текст",
    date: "30.01.24",
    ispublic:false
    },
]

let cardlist = document.querySelector(".card-list")



for (let i = 0; i < 3; i++) {

  cardlist.insertAdjacentHTML("afterbegin",`          <h2>${cards[i].title}</h2>
          <p>${cards[i].text}</p>
          <p>${cards[i].date}</p>
        </div>
`);
}






const t  =setTimeout(function(){
  console.log("сработала задержка");
}, 5000);

const i =setInterval(() => {
  console.log("сработала интервал");
}, 1000);

clearInterval(i)