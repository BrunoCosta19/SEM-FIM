$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const titulo = document.querySelector("#titulo-destaque");
const descricao = document.querySelector("#descricao-destaque");
const link = document.querySelector("#link");
const fundo = document.querySelector("#fundo");
const info = document.querySelector("#info");

const livrosDoCarrossel = document.querySelectorAll(".box-livro");
livrosDoCarrossel.forEach(livro => $(livro).on('click', clickHandler));
//livrosDoCarrossel.forEach(livro => livro.addEventListener('mousedown',clickHandler));

function clickHandler(){
    titulo.innerText = this.dataset.titulo;
    descricao.innerText = this.dataset.descricao;
    link.href = this.dataset.link;
    fundo.style.background = `linear-gradient(to right, rgba(0,0,0,.8),rgba(0,0,0,.5)), url('${this.dataset.fundo}')`;
    fundo.style.backgroundSize = "cover";
    info.href = this.dataset.info;

}