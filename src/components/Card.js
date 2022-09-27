import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardImage, cardTrunfo } = this.props;
    return (
      <div className="card-div">
        <h3 className="name-card" data-testid="name-card">{cardName}</h3>
        <img src={ cardImage } data-testid="image-card" alt={ cardName } />
        <p data-testid="description-card">{cardDescription}</p>
        <div className="div-attr">
          <h5 data-testid="attr1-card">{cardAttr1}</h5>
          <h5 data-testid="attr2-card">{cardAttr2}</h5>
          <h5 data-testid="attr3-card">{cardAttr3}</h5>
        </div>
        <h4 data-testid="rare-card">{cardRare}</h4>
        {cardTrunfo && <h3 data-testid="trunfo-card">Super Trunfo</h3> }
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
};

export default Card;
