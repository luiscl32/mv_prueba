import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const data = require('./categories.json');
class App extends Component {
/*=============================================>>>>>
= constructor =
===============================================>>>>>*/
  constructor(props) {
    super(props);

    this.state = {
      nodoRaiz: '',
      raiz: '',
      der: '',
      izq: '',
    };
  }
/*= End of constructor =*/
/*=============================================<<<<<*/
/*=============================================>>>>>
= funciones =
===============================================>>>>>*/

  arbol(){
    var arbol = new Array();
    var padres = this._buscarPadre(data.categories);
    var hijos = this._buscarHijos(data.categories,padres);

  }

  _buscarPadre(arrayPadre){
    var padres =  new Array();
    for (var i = 0; i < arrayPadre.length; i++) {
      var nodo =  arrayPadre[i];

      if(nodo.id_parent !== "0"){
        if(arrayPadre[i+1] !== undefined){
          if(nodo.id_parent["#text"] === arrayPadre[i+1].id_parent["#text"]){
            console.log('padre repetido ');
          }else{
            padres.push(nodo.id_parent["#text"]);
          }
        }else{
          break;
        }
      }
    }
    return padres;
  }

  _buscarHijos(data,padres){

    var hijos = new Array(padres.length);
    var hijos_arr = new Array();

    for (var i = 0; i < padres.length; i++) {
      console.log('-------------------------------');
      console.log('PADRE: ' + padres[i] + ' hijos:');
      for (var j = 0; j < data.length; j++) {

        var nodo = data[j];
        hijos[i] = new Array();

        if(padres[i] === nodo.id_parent["#text"]){

          hijos[i][j] = nodo.id;
          hijos_arr.push(nodo.id);
          console.log(hijos[i][j]);
        }
      }
      console.log('-------------------------------');
    }
    return hijos_arr;
  }



/*= End of funciones =*/
/*=============================================<<<<<*/





  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          prueba multivende
        </p>
        <button onClick={this.arbol.bind(this)}>
          Cargar archivo json
        </button>
      </div>
    );
  }
}

export default App;
