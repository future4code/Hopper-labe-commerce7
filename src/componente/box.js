import React from "react";




function box(props){

return  <div className="BoxProdutos">
<div className="Produtos">                

 <div className="item">
    <img className='foto' src={props.foto} alt="foto" />
    <div className='propriedades'>
      <p className="nomeProduto">{props.nome}</p>
      <p className="preco"> R$ {props.valor}</p>
      <button className='botao'>
        adicionar ao carrinho
      </button>
    </div>
  </div>         
 </div>
 </div>

}


export default box 