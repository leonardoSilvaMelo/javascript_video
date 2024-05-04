const video = document.getElementById("myVideo");  //Estamos fazendo uma busca dentro do HTML para salvar o ID
const btn = document.getElementById("myBtn");



function myFunction() { //Aqui criamos uma Função 
  
  
if (video.paused) { //se o vídeo estiver pausado execute: Play.
    video.play();
    btn.innerHTML = "Pause"; // O innerHTML funciona como uma alteração textual dentro do HTML, usamos ele no Javascript para executar essa chamada.
  } else { //caso contrário, se o 
    video.pause();
    btn.innerHTML = "Play";
  }
}


  window.revelar = ScrollReveal({reset:true});

  revelar.reveal('.efeito-img-topo', {
    duration:3000,
    distance:'150px'
  })