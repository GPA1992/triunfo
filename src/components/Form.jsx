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
      <div id="container">
        <h1>Adicionar nova carta</h1>
        <form className="container-form" id="form" action="">
          <label htmlFor="cardName">
            Nome
            <input
              onChange={ onInputChange }
              value={ cardName }
              id="cardName"
              data-testid="name-input"
              type="text"
            />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              onChange={ onInputChange }
              value={ cardDescription }
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
            <input
              onChange={ onInputChange }
              value={ cardAttr1 }
              id="atributo1"
              data-testid="attr1-input"
              type="number"
            />
          </label>
          <label htmlFor="atributo2">
            Atributo 2
            <input
              onChange={ onInputChange }
              value={ cardAttr2 }
              id="atributo2"
              data-testid="attr2-input"
              type="number"
            />
          </label>
          <label htmlFor="atributo3">
            Atributo 3
            <input
              onChange={ onInputChange }
              value={ cardAttr3 }
              id="atributo3"
              data-testid="attr3-input"
              type="number"
            />
          </label>
          <label htmlFor="image">
            Imagem
            <input
              value={ cardImage }
              onChange={ onInputChange }
              id="image"
              type="text"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rareType">
            Raridade
            <select
              value={ cardRare }
              onChange={ onInputChange }
              name="rareType"
              id="rareType"
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          <label className="trunfo" id="trunfo" htmlFor="trunfo">
            <input
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
              value={ cardTrunfo }
              type="checkbox"
            />
            Super Trunfo
          </label>
          <button
            onClick={ onSaveButtonClick }
            disabled={ isSaveButtonDisabled }
            data-testid="save-button"
            type="submit"
          >
            Salvar
          </button>
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
