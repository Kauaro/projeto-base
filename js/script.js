let slideIndex = 1;
showSlides(slideIndex);

function auto(){
    showSlides(slideIndex +=1);
}

var timer = setInterval( auto, 8000);

function plusSlides(n) {
  showSlides(slideIndex += n);
  clearInterval(timer);
  timer = setInterval(auto, 8000);

}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// remove o zoom quando o width eh menor q 992

//guarda as imagens numa variavel
let imgs = [...document.querySelectorAll(".melhores-top img")]

//se (viewport width >= 992px) { remover classe zoom dos imgs[item: 0, item: 1] }
if(document.documentElement.clientWidth <= 992){
  imgs.map(item => item.classList.remove("zoom")) 
} 

document.getElementById('projectForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Evita o envio do formulário e o recarregamento da página

  // Obtém os valores dos campos do formulário
  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const theme = document.getElementById('theme').value;
  const participants = document.getElementById('participants').value;
  const schedule = document.getElementById('schedule').value;

  // Exibe os dados do projeto na página
  const output = document.getElementById('output');
  output.innerHTML = `
      <h2>Dados do Projeto Cadastrado:</h2>
      <p><strong>Título:</strong> ${title}</p>
      <p><strong>Descrição:</strong> ${description}</p>
      <p><strong>Tema:</strong> ${theme}</p>
      <p><strong>Participantes:</strong> ${participants}</p>
      <p><strong>Horário de Apresentação:</strong> ${schedule}</p>
  `;
});
