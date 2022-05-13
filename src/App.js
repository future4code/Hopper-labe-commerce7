import React from 'react';
import './App.css';
import satelites01 from '.Components/imgs';
import roupasespaciais02 from '.Components/imgs';
import camisetasespaciais03 from '.Components/imgs';
import viagensespaciais04 from '.Components/imgs';
import meteoritos05 from '.Components/imgs';
import brinquedosespaciais06 from '.Components/imgs';
import navesespaciais07 from '.Components/imgs';



class App extends React.Component {
  render() {

    return (
      <id className="App">
        <div className="Filtro">
          <h1>Aqui vai o filtro</h1>
        </div>
        <div className="Home">
          <p>Quantidade de Produtos:7</p>
          <label>Ordenação</label>
          <select>
            <option>Crescente</option>
            <option>Decrescente</option>
          </select>
          <div className="BoxProdutos">


            <div className="Produtos">
              <img scr={satelites01}/>
              <p>Satélites Antigos</p>
              <button>Adicionar</button>
            </div>

            <div className="Produtos">
              <img scr={roupasespaciais02}/>
              <p>Roupas Espaciais</p>
              <button>Adicionar</button>
            </div>

            <div className="Produtos">
              <img scr={camisetasespaciais03}/>
              <p>Camisetas Espaciais</p>
              <button>Adicionar</button>
            </div>

            <div className="Produtos">
              <img scr={viagensespaciais04}/>
              <p>Viagens Espaciais</p>
              <button>Adicionar</button>
            </div>

            <div className="Produtos">
              <img scr={meteoritos05}/>
              <p>Meteoritos</p>
              <button>Adicionar</button>
            </div>

            <div className="Produtos">
              <img scr={brinquedosespaciais06}/>
              <p>Brinquedos Espaciais</p>
              <button>Adicionar</button>
            </div>

            <div className="Produtos">
              <img scr={navesespaciais07}/>
              <p>Naves Espaciais</p>
              <button>Adicionar</button>
              </div>
          </div>
        </div>




        <div className="Carrinho">
          <h1>Carrinho</h1>




        </div>

      </id>


    )

  };
}

export default App;
