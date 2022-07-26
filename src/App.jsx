import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      /* hasTrunfo: false, */
      isSaveButtonDisabled: true,
      cards: [],
    };
  }

  // Função que da suporte pra validação do botão salvar, verifica se o valor dos atributos está contido dentro dos requisitos
  checkAttrValue = (attr) => {
    const valorMaximoPorAtributo = 90;
    if (Number(attr) >= 0 && Number(attr) <= valorMaximoPorAtributo) return false;
    return true;
  }

  // Função que soma o valor total de atributos, não pode passar de 210
  checkTotalAttrValue = (attr1, attr2, attr3) => {
    const valorTotalAtributos = 210;
    if (Number(attr1) + Number(attr2) + Number(attr3) <= valorTotalAtributos) {
      return false;
    }
    return true;
  }

  // Função para validar se todos os campos do form estão devidamente preenchidos.
  validateSubmit = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage } = this.state;

    const errors = [
      !cardName.length,
      !cardDescription.length,
      this.checkAttrValue(cardAttr1),
      this.checkAttrValue(cardAttr2),
      this.checkAttrValue(cardAttr3),
      this.checkTotalAttrValue(cardAttr1, cardAttr2, cardAttr3),
      !cardImage.length,
    ];

    const anyError = errors.every((erro) => erro === false);
    this.setState({ isSaveButtonDisabled: !anyError });
  }

  // Função para salvar a carta no array de cartas
  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo } = this.state;
    const obj = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    this.setState((previousState) => ({
      cards: [...previousState.cards, obj],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      isSaveButtonDisabled: true,
    }));
  };

  // Função para atribuir o valor para o state relacionado linkando o target name com o target value(onteudo do course)
  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, () => this.validateSubmit());
  }

  render() {
    // Estado atual
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo,
      /* hasTrunfo, */ isSaveButtonDisabled } = this.state;
    return (
      <div>
        <Form
          cardName={ cardName }
          onInputChange={ this.onInputChange }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ cardName }
          cardImage={ cardImage }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
      </div>
    );
  }
}

export default App;
