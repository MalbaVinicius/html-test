function mais(){
  var atual = document.getElementById("idade").value
  var novo = atual - (-1)
  document.getElementById("idade").value = novo
}
function menos(){
  var atual = document.getElementById("idade").value
  if(atual > 1) {
    var novo = atual - 1
    document.getElementById("idade").value = novo
  }
}

formulário.addEventListener('submit', (event) => {
  event.preventDefault();
  alert("Essa é a única página deste projeto!")
  window.location.reload()
})