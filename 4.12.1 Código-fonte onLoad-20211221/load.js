var repete = 1;
while(repete <= 3){
	alert("Mensagem: " + repete);
	repete = repete + 1;
}
function carreguei(){
  document.getElementById("log").innerHTML += "carreguei<br>";
}
function redimensionei(){
  document.getElementById("log").innerHTML += "redimensionei<br>";
}