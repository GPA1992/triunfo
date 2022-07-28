import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import CreatedCard from './components/CreatedCard';
import Filter from './components/Filter';
/* import Cartx from './components/Cartas'; */
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
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cards: [],
      disabledOn: true,
      filterName: '',
      filterRarity: 'todas',
      FilterSuperTrunfo: false,
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
    this.setState({
      isSaveButtonDisabled: !anyError,
    });
  }

  // Função para salvar a carta no array de cartas
  onSaveButtonClick = (event) => {
    event.preventDefault();
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo } = this.state;
    const obj = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };
    let checkIfHaveCardTrunfo = false;
    if (cardTrunfo || hasTrunfo) checkIfHaveCardTrunfo = true;
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
      hasTrunfo: checkIfHaveCardTrunfo,
      isSaveButtonDisabled: true,
    }));
  };

  // Função para atribuir o valor para o state relacionado linkando o target name com o target value(onteudo do course)
  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    }, this.validateSubmit);
  }

  // Função para matar uma carta
  killCard = ({ target }) => {
    const { cards } = this.state;
    const newArray = cards.filter((cartas) => cartas.cardName !== target.name);
    const checkIfHaveCardTrunfo = newArray.some((cartas) => cartas.cardTrunfo === true);
    this.setState({
      cards: newArray,
      hasTrunfo: checkIfHaveCardTrunfo,
    });
  }

  // Função para filtrar as cartas pelo nome.
changeFilterName = ({ target }) => {
  const { value } = target;
  this.setState({
    filterName: value,
  });
};

// Função para filtrar as cartas pela raridade.
changeFilterRare = ({ target }) => {
  const { value } = target;
  this.setState({
    filterRarity: value,
  });
};

// Função para filtrar a carta super trunfo.
changeFilterTrunfo = ({ target }) => {
  const { checked } = target;
  this.setState({
    FilterSuperTrunfo: checked,
  });
};

render() {
  const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
    cardImage, cardRare, cardTrunfo,
    hasTrunfo, isSaveButtonDisabled, cards,
    disabledOn, filterName, filterRarity, FilterSuperTrunfo } = this.state;

  // Lógica para filtrar as cartas pela raridade, se for selecionado todas, devera ser retornado todas as cartas.
  const filterWhitRarity = cards.filter((card) => {
    if (filterRarity === 'todas') return true;
    return card.cardRare === filterRarity;
  });

  // Lógica para filtrar as cartas pelo nome, usando o como paramentro o array gerado pela função que filtra pela raride.
  const filterWhitName = filterWhitRarity.filter((carta) => carta
    .cardName.includes(filterName));

  // Lógica para filtrar apenas a carta super trunfo quando o checkbox eestiver marcado.
  const filterSuperTrunfo = filterWhitName.filter((carta) => {
    if (FilterSuperTrunfo === true) return carta.cardTrunfo === true;
    return true;
  });
  return (
    <div className="main">
      <div className="create">
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
            hasTrunfo={ hasTrunfo }
          />
        </div>
        <div>
          <Card
            cardName={ cardName }
            cardImage={ cardImage }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            disabledOn={ !disabledOn }
            killCard={ this.killCard }
          />
        </div>
      </div>
      <div>
        <Filter
          filterName={ this.changeFilterName }
          filterRarity={ this.changeFilterRare }
          filterSuperTrunfo={ this.changeFilterTrunfo }
          trunfoChecked={ FilterSuperTrunfo }
        />
      </div>
      <div>
        { filterSuperTrunfo.map((cartas) => (
          <CreatedCard
            key={ cartas.cardName }
            cardName={ cartas.cardName }
            cardImage={ cartas.cardImage }
            cardDescription={ cartas.cardDescription }
            cardAttr1={ cartas.cardAttr1 }
            cardAttr2={ cartas.cardAttr2 }
            cardAttr3={ cartas.cardAttr3 }
            cardRare={ cartas.cardRare }
            cardTrunfo={ cartas.cardTrunfo }
            disabledOn={ disabledOn }
            killCard={ this.killCard }
          />
        )) }
      </div>
    </div>
  );
}
}

export default App;
