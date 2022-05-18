'use strict'

class card extends HTMLElement {

    constructor(){
        super();
        this.build()
    }

    build (){
       const shadow = this.attachShadow({mode: 'open'})
       shadow.appendChild(this.styles())
       shadow.appendChild(this.createCard())

    }

    styles(){
        const style = document.createElement('style')
        style.textContent = `

        .card{
            width: ${this.largura()};
            height: ${this.altura()};
        
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            background-color: ${this.bgcolor()};
        
        }
        
        .card-text{
            width: 50%;
        
            padding: 4px;
            text-align: center;
            color: #ffffff;
           
            border-radius: 15px;
            box-shadow: 0 0 2px #000;
        
            text-transform: uppercase;
        }
        
        .card-image{
            background-color: rgb(246, 246, 246);
            width: 90px;
            height: 90px;
            border-radius: 30px;
            background-image: url(${this.foto()});
            background-size: cover;
            box-shadow: inset 0 0 8px #000;
        }
        
        
        
        `
        return style

    }

    createCard(){

        // <div class="card">
        //     <div class="card-text">Samea</div>
        //     <div class="card-image"></div>
        //     <div class="card-text">DS2T</div>
        // </div>
        
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `

        <div class="card">
            <div class="card-text">${this.aluno()}</div>
            <div class="card-image"></div>
            <div class="card-text">${this.turma()}</div>
        </div>
        
        
        `

        return card 
    }
    largura(){
        const larguraCard = this.getAttribute('data-largura') ?? "250px"
        return larguraCard

    }

    altura(){
        const alturaCard = this.getAttribute('data-altura') ?? "250px"
        return alturaCard

    }

    bgcolor(){
        const color = this.getAttribute('data-bgcolor') ?? "#f00"
        return color 
    }

    foto(){

        const imagem = this.getAttribute('data-img') ?? "img/2784481.png"
        return imagem
    }

    aluno(){

        const nome = this.getAttribute('nome') ?? "Samea"
        return nome
    }

    turma(){

        const nomeTurma = this.getAttribute('turma') ?? "DS2T"
        return nomeTurma
    }

} 

customElements.define('card-aluno', card)