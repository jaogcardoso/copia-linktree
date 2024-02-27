function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  /*Resumo da função toggle a cima
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } */
}
