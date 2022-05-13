import React from 'react';
import './App.css';
import imagem from "./img/foguete.jpg"




class App extends React.Component{

  state = {
    produtos: [
      {valor:50, nome: "produto1"},
      {valor:50, nome: "produto2"},
      {valor:50, nome: "produto3"},
      {valor:50, nome: "produto4"},
      {valor:50, nome: "produto5"},
      {valor:50, nome: "produto6"},
      {valor:50, nome: "produto7"}
    ]

    
  }
  

  render(){

    

    return(
    <id className = "App">
      <div className = "Filtro">
        <h1>Aqui vai o filtro</h1>
      </div>
      <div className = "Home">
        <p>Quantidade de Produtos:7</p>
        <label>Ordenação</label>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
        <div className = "BoxProdutos">
          <div className = "Produtos">
      
              <div className = "item1"> 
                <img className='foto' src={imagem} alt = "foto"/>
                <div className='propriedades'>
                  <p>nome do produto1</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className = "item2"> 
              <img className='foto' src={imagem} alt = "foto"/>
                <div className='propriedades'>
                  <p>nome do produto2</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className = "item3"> 
              <img className='foto' src={imagem} alt = "foto"/>
                <div className='propriedades'>
                  <p>nome do produto3</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className = "item4"> 
              <img className='foto' src={imagem} alt = "foto"/>
                <div className='propriedades'>
                  <p>nome do produto4</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className = "item5"> 
              <img className='foto' src={imagem} alt = "foto" />
                <div className='propriedades'>
                  <p>nome do produto5</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className = "item6"> 
              <img className='foto' src={imagem} alt = "foto"/>
                <div className='propriedades'>
                  <p>nome do produto6</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className = "item7"> 
              <img className='foto' src={imagem} alt = "foto"/>
                <div className='propriedades'>
                  <p>nome do produto7</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>
           
          </div>
        </div>
      </div>
      <div className = "Carrinho">
        <h1>Aqui vai o carrinho</h1>
      </div>
    </id>

      
      )
  
  };
}

export default App;
