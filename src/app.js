window.onload = function() {
  //write your code here
  document.querySelector("#the-excuse").innerHTML = generandoLink();
};

let generandoLink = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let aux = [];

  for (let i = 0; i < pronoun.length; i++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        aux.push(pronoun[i] + adj[b] + noun[c] + ".com ");
        aux.push("<br />");
      }
    }
  }
  console.log(aux);
  return aux;
};
