import React from "react";
import './App.css';
import React from 'react';
import styled from 'styled-components';

class TodosProdutos extends React.Component {
const ContainerDosCards = styled.div`
width: 200px;
text-align: center;
display: flex;
flex-direction: column;
justify-items: center;
border: 1px solid;
`;

   state = {
       cards: [
            {
                imagem: "https://imgur.com/MLMhYwy",
                valor: "R$ 350.00",
                nome: "Satelites",
            },
            {
                imagem: "https://imgur.com/5KODjIl",
                valor: "R$ 400,00",
                nome: "Roupas Espaciais",
            },
            {
                imagem: "https://imgur.com/W5D6f5B",
                valor: "R$ 100.00",
                nome: "Camisetas Espaciais",
            },
            {
                imagem: "https://imgur.com/kEfRD7u",
                valor: "R$ 750.00",
                nome: "Viagens Espaciais",
            },
            {
                imagem: "https://imgur.com/AcrRpeY",
                valor: "R$ 350.00",
                nome: "Meteoritos",
            },
            {
                imagem: "https://imgur.com/rI5CKGC",
                valor: "R$ 255.00",
                nome: "Brinquedos Espaciais",
            },
            
            {
                imagem: "https://imgur.com/RCwsgaX",
                valor: "R$ 1500.00",
                nome: "Naves Espaciais",
            },
        ]
    }
    render(){
        return(
            <div>


            </div>
        )
    }

    onChange

    render () {

      return (

        <this.ContainerDosCards>
            <img src="https://imgur.com/MLMhYwy" />
            <p>
                Satelites
            </p>
            <p>
                Preço R$ 350,00.
            </p>
            <img src="https://imgur.com/5KODjIl" />
            <p>
                Roupas espaciais
            </p>
            <p>
                Preço R$ 400,00.
            </p>
            <img src="https://imgur.com/W5D6f5B" />
            <p>
                 Camisetas espaciais
            </p>
            <p>
                Preço R$ 100,00.
            </p>
            <img src="https://imgur.com/kEfRD7u" />
            <p>
                Viagens espaciais
            </p>
            <p>
                Preço R$ 750,00.
            </p>
            <img src="https://imgur.com/AcrRpeY" />
            <p>
                Meteoritos
            </p>
            <p>
                Preço R$ 350,00.
            </p>
            <img src="https://imgur.com/rI5CKGC" />
            <p>
                Brinquedos espaciais   
            </p>
            <p>
                Preço R$ 255,00.
            </p>
            <img src="https://imgur.com/RCwsgaX" />
            <p>
                Naves Espaciais    
            </p>
            <p>
                Preço R$ 1500,00.
            </p>

        </CardContainer>

);
}
}


export default TodosProdutos; 
