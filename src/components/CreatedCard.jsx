import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CreatedCard.css';

class CreatedCard extends Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, disabledOn, killCard } = this.props;
    return (
      <div className="createdCard">
        <span data-testid="name-card">{ cardName }</span>
        <img
          className="image-card"
          data-testid="image-card"
          src={ cardImage }
          alt={ cardName }
        />
        <span data-testid="description-card">{ cardDescription }</span>
        <div className="allText">
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
          <div className="rareTrunfo">
            <div>
              <span data-testid="rare-card">{ cardRare }</span>
            </div>
            {cardTrunfo && (
              <div className="superTrunfo">
                <div>
                  <span data-testid="trunfo-card">Super Trunfo</span>
                </div>
              </div>)}
          </div>
        </div>
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
    );
  }
}

CreatedCard.propTypes = {
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
export default CreatedCard;
