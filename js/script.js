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

document.addEventListener('DOMContentLoaded', () => {
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const contacts = document.querySelectorAll('.contact');
  const chatHeader = document.querySelector('.chat-header');
  const messages = document.querySelector('.messages');
  const inputArea = document.querySelector('.input-area input');
  const sendButton = document.querySelector('.input-area button');

  contacts.forEach(contact => {
    contact.addEventListener('click', function() {
      const name = this.querySelector('span').textContent;
      chatHeader.textContent = `Chat com ${name}`;
      messages.innerHTML = ''; // Clear previous messages
    });
  });

  sendButton.addEventListener('click', sendMessage);
  inputArea.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });

  function sendMessage() {
    const messageText = inputArea.value.trim();
    if (messageText) {
      const messageElement = document.createElement('div');
      messageElement.classList.add('message', 'sent');
      messageElement.textContent = messageText;
      messages.appendChild(messageElement);
      inputArea.value = '';
      messages.scrollTop = messages.scrollHeight;
    }
  }

  const searchInput = document.querySelector('.search-bar input');
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    contacts.forEach(contact => {
      const name = contact.querySelector('span').textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        contact.style.display = 'flex';
      } else {
        contact.style.display = 'none';
      }
    });
  });
});



document.querySelector('.login-icon').addEventListener('click', () => {
  alert('Funcionalidade de login em desenvolvimento!');
});