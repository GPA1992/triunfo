import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Form.css';

class Form extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      onInputChange, onSaveButtonClick } = this.props;
    return (
      <div className="container-form">
        <h1>Adicionar nova carta</h1>
        <form id="form" action="">
          <label htmlFor="cardName">
            Nome
            <input
              name="cardName"
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
              name="cardDescription"
              id="cardDescription"
              cols="30"
              rows="10"
              data-testid="description-input"
            >
              { cardDescription }
            </textarea>
          </label>
          <label htmlFor="atributo1">
            Atributo 1
            <input
              name="cardAttr1"
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
              name="cardAttr2"
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
              name="cardAttr3"
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
              name="cardImage"
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
              name="cardRare"
              id="rareType"
              data-testid="rare-input"
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito Raro</option>
            </select>
          </label>
          { hasTrunfo && (
            <label className="trunfo" id="trunfo" htmlFor="trunfo">
              <input
                name="cardTrunfo"
                data-testid="trunfo-input"
                onChange={ onInputChange }
                checked={ cardTrunfo }
                value={ cardTrunfo }
                type="checkbox"
              />
              Super Trunfo
            </label>
          )}
          { !hasTrunfo && (
            <p
              name="cardTrunfo"
              data-testid="trunfo-input"
              onChange={ onInputChange }
              checked={ cardTrunfo }
              value={ cardTrunfo }
            >
              Você já tem um Super Trunfo em seu baralho
            </p>
          )}
          <button
            name="onSaveButtonClick"
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
