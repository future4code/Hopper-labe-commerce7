import React from 'react';
import './App.css';


class App extends React.Component{
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
         
              <p>Satélites Antigos</p>
            
              <p>Roupas Espaciais</p>
            
              <p>Camisetas Espaciais</p>
            
              <p>Viagens Espaciais</p>
           
              <p>Meteoritos</p>
          
              <p>Brinquedos Espaciais</p>
           
              <p>Naves Espaciais</p>
          </div>
        </div>
      </div>
      <div className = "Carrinho">
        <h1>Carrinho</h1>
        <Carrinho carrinho={this.state.carrinho} onClick={this.removerProduto}></Carrinho>
          <Carrinho
            carrinho={this.state.carrinho}
            onClick={this.removerProduto}
          ></Carrinho>
      </div>
    </id>

      
      )
  
  };
}

export default App;
