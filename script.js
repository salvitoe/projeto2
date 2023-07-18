function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // acima é o código para o botão mexer
  // if (html.classList.contains("light")) {
  //  html.classList.remove("light")
  // } else {
  //   html.classList.add("light")
  // }


  // troca de imagem
  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/ana-dia.jpg")
  } else {
    img.setAttribute('src','./assets/ana-noite.jpg')
  }
}
