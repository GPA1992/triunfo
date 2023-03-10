import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css';

class Card extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, disabledOn, killCard } = this.props;
    return (
      <div className="card">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img
          className="image"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <p data-testid="description-card">{ cardDescription }</p>
        <ul>
          <li>
            <span data-testid="attr1-card">{ `Attr 1: ${cardAttr1}` }</span>
          </li>
          <li>
            <span data-testid="attr2-card">{ `Attr 2: ${cardAttr2}` }</span>
          </li>
          <li>
            <span data-testid="attr3-card">{ `Attr 3: ${cardAttr3}` }</span>
          </li>
        </ul>
        <p data-testid="rare-card">{ cardRare }</p>
        {cardTrunfo && (<p data-testid="trunfo-card">Super Trunfo</p>)}
        <div>
          { disabledOn && (
            <button
              name={ cardName }
              onClick={ killCard }
              data-testid="delete-button"
              type="button"
            >
              Excluir
            </button>
          )}
        </div>
      </div>
    );
  }
}
Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  disabledOn: PropTypes.bool.isRequired,
  killCard: PropTypes.func.isRequired,
};
export default Card;
