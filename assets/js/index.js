

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
    date: "30.01.24"
    }
]

let cardlist = document.querySelector(".card-list")
cardlist.insertAdjacentHTML("afterbegin",`          <h2>sdjnvefnvejnvej</h2>
          <p>dfkjvndknjfnvkjn</p>
          <p>dsgaethethwet</p>
        </div>
`);