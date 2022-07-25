import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
    /*   attr1: 0,
      attr2: 0, */
    };
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div id="form">
        <h1>Adicionar nova carta</h1>
        <form action="">
          <label htmlFor="cardName">
            Nome
            <input id="cardName" data-testid="name-input" type="text" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              id="description"
              cols="30"
              rows="10"
              data-testid="description-input"
            >
              texto
            </textarea>
          </label>
          <label htmlFor="atributo1">
            Atributo 1
            <input id="atributo1" data-testid="attr1-input" type="number" />
          </label>
          <label htmlFor="atributo2">
            Atributo 2
            <input id="atributo2" data-testid="attr2-input" type="number" />
          </label>
          <label htmlFor="atributo3">
            Atributo 3
            <input id="atributo3" data-testid="attr3-input" type="number" />
          </label>
          <label htmlFor="image">
            Imagem
            <input id="image" type="text" data-testid="image-input" />
          </label>
          <label htmlFor="rareType">
            Raridade
            <select name="rareType" id="rareType" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label id="trunfo" htmlFor="trunfo" data-testid="trunfo-input">
            <input type="checkbox" />
            Super Trunfo
          </label>
          <button data-testid="save-button" type="submit">Salvar</button>
        </form>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
export default Form;
