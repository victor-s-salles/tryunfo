import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      onInputChange,
      onSaveButtonClick,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
      isSaveButtonDisabled,
      hasTrunfo,
    } = this.props;
    return (
      <div>
        <h3>ADICIONE NOVA CARTA</h3>
        <form action="">
          <label htmlFor="cardName">
            Nome
            <input
              type="text"
              id="cardName"
              name="cardName"
              data-testid="name-input"
              onChange={ onInputChange }
              value={ cardName }
            />
          </label>
          <label htmlFor="cardDescription">
            Descrição
            <textarea
              name="cardDescription"
              id="cardDescription"
              cols="20"
              rows="5"
              data-testid="description-input"
              onChange={ onInputChange }
              value={ cardDescription }
            />
          </label>
          <label htmlFor="cardAttr1">
            Attr1
            <input
              type="number"
              id="cardAttr1"
              name="cardAttr1"
              data-testid="attr1-input"
              onChange={ onInputChange }
              value={ cardAttr1 }
            />
          </label>
          <label htmlFor="cardAttr2">
            Attr2
            <input
              type="number"
              id="cardAttr2"
              name="cardAttr2"
              data-testid="attr2-input"
              onChange={ onInputChange }
              value={ cardAttr2 }
            />
          </label>
          <label htmlFor="cardAttr3">
            Attr3
            <input
              type="number"
              id="cardAttr3"
              name="cardAttr3"
              data-testid="attr3-input"
              onChange={ onInputChange }
              value={ cardAttr3 }
            />
          </label>
          <label htmlFor="cardImage">
            Imagem
            <input
              type="text"
              id="cardImage"
              name="cardImage"
              data-testid="image-input"
              onChange={ onInputChange }
              value={ cardImage }
            />
          </label>
          <label htmlFor="cardRare">
            Raridade
            <select
              name="cardRare"
              id="cardRare"
              data-testid="rare-input"
              onChange={ onInputChange }
              value={ cardRare }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          {!hasTrunfo && (
            <div>
              <label htmlFor="cardTrunfo">
                Super Trunfo
                <input
                  id="cardTrunfo"
                  name="cardTrunfo"
                  type="checkbox"
                  data-testid="trunfo-input"
                  onChange={ onInputChange }
                  checked={ cardTrunfo }
                />
              </label>
            </div>
          )}
          {hasTrunfo && <h5>Você já tem um Super Trunfo em seu baralho</h5>}
          <button
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
            type="button"
            data-testid="save-button"
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
