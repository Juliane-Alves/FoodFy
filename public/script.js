const modaloverlay = document.querySelector('.modal-overlay')
const receita = document.querySelectorAll('.receita')// criar um array de elementos: [{},{},{}]
const closeModal = document.querySelector('.close-modal')
const imageDoProduto = document.querySelectorAll('.imagem-produto')
const textoDoProduto = document.querySelectorAll('.receita-info-type')
const modalImageProduto = document.querySelector('.modal-imagem-produto')
const nomeDoProduto = document.querySelector('.nome-do-produto')
const nomeDoCriador = document.querySelectorAll('.receita-nome-criador')
const nomeDoChef = document.querySelector('.nome-do-chefe')


// itera sobre todas a receitas, da minha página
for(let index = 0; index < receita.length; index += 1) {

  receita[index].addEventListener('click', function() {
    modaloverlay.classList.add('modal-ativo')

    modalImageProduto.src = imageDoProduto[index].src
    nomeDoProduto.innerText = textoDoProduto[index].innerText
    nomeDoChef.innerText = nomeDoCriador[index].innerText
  })

}

// fecha a janela do modal
closeModal.addEventListener('click', function() {
  modaloverlay.classList.remove('modal-ativo')
})