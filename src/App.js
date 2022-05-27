import React from 'react';
import './App.css';
import imagem from "./img/foguete.jpg"
import Box from "./componente/box"




class App extends React.Component {


  state = {
    produtos: [
      { id: 1, valor: 50, nome: "produto1", foto: imagem },
      { id: 2, valor: 55, nome: "produto2", foto: imagem },
      { id: 3, valor: 60, nome: "produto3", foto: imagem },
      { id: 4, valor: 70, nome: "produto4", foto: imagem },
      { id: 5, valor: 103, nome: "produto5", foto: imagem },
      { id: 6, valor: 150, nome: "produto6", foto: imagem },
      { id: 7, valor: 149, nome: "produto7", foto: imagem },
    ],

    pesquisar: "",
    ordem: "crescente",
    preçoMinimo: "",
    preçoMaximo: "",



  }

  pesquisa = (event) => {
    this.setState({ pesquisar: event.target.value })
  }

  PreçoMinimo = (event) => {
    this.setState({ preçoMinimo: event.target.value })
  }

  PreçoMaximo = (event) => {
    this.setState({ preçoMaximo: event.target.value })
  }

  updateOrdem = (event) => {
    this.setState({ ordem: event.target.value })
  }


  render() {


    const listaDeProdutos = this.state.produtos

      .filter(lista => {
        return lista.nome.toLocaleUpperCase().includes(this.state.pesquisar.toLocaleUpperCase())
      })

      .filter(lista => {
        return this.state.preçoMinimo === "" || lista.valor >= this.state.preçoMinimo
      })

      .filter(lista => {
        return this.state.preçoMaximo === "" || lista.valor <= this.state.preçoMaximo
      })

      .sort((a, b) => {
        switch (this.state.ordem) {
          case "crescente":
            return a.nome.localeCompare(b.nome);

          default:
            return b.nome.localeCompare(a.nome)
        }


      })

      .map(lista => {
        return <Box nome={lista.nome} valor={lista.valor} foto={lista.foto} />

      })

    // console.log(ordemDeProduto)
    return (


      <id className="App">
        
        <header>
        <div className="Filtro">
          <label>Ordenação: </label>

          <select value={this.state.ordem} onChange={this.updateOrdem}>
            <option value="crescente">Crescente</option>
            <option value="decrescente">Decrescente</option>
          </select>

          <h1>Filtro</h1>

          <input placeholder='Pesquisar' value={this.state.pesquisar} onChange={this.pesquisa}></input>
          <input type="number" placeholder='Preço Minimo' value={this.state.preçoMinimo} onChange={this.PreçoMinimo}></input>
          <input type="number" placeholder='Preço Maximo' value={this.state.preçoMaximo} onChange={this.PreçoMaximo}></input>


        </div>
        </header>
        
        <div className="Carrinho">
          <h1>Aqui vai o carrinho</h1>
        </div>
        
        <div className='BoxProdutos'>{listaDeProdutos}</div>

        {/* <div className="BoxProdutos">
                    
            <div className="Produtos">
            {this.listaDeProdutos}
            
              <div className="item1">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto1</p>
                  <p>preço: R$ 50</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className="item2">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto2</p>
                  <p>preço: R$ 55</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className="item3">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto3</p>
                  <p>preço: R$ 60</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className="item4">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto4</p>
                  <p>preço: R$ 70</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className="item5">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto5</p>
                  <p>preço: R$ 103</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className="item6">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto6</p>
                  <p>preço: R$ 150</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>
                </div>
              </div>

              <div className="item7">
                <img className='foto' src={imagem} alt="foto" />
                <div className='propriedades'>
                  <p>nome do produto7</p>
                  <p>preço: R$ 149</p>
                  <button className='botao'>
                    adicionar ao carrinho
                  </button>

                </div>
              </div>

            </div>
          </div>
        </div> */}
        
      </id>


    )

  };
}

export default App;
