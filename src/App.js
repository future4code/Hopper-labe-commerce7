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
         
              <p>nome do produto 1</p>
            
              <p>nome do produto 2</p>
            
              <p>nome do produto 3</p>
            
              <p>nome do produto 4</p>
           
              <p>nome do produto 5</p>
          
              <p>nome do produto 6</p>
           
              <p>nome do produto 7</p>
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
