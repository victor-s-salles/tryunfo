import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

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
    };
  }

  validateText = () => {
    const { cardName, cardDescription, cardRare, cardImage } = this.state;
    const testBoolText = (cardName && cardDescription && cardRare && cardImage);
    return testBoolText;
  };

  validateAtt = () => {
    const { cardAttr1, cardAttr2, cardAttr3 } = this.state;
    const maxAtt = 90;
    const maxTotal = 210;
    const sunTotal = parseInt(cardAttr3, 10) + parseInt(cardAttr2, 10)
    + parseInt(cardAttr1, 10);
    const testBoolMax = (cardAttr1 > maxAtt || cardAttr2 > maxAtt || cardAttr3 > maxAtt);
    const testBoolmin = (cardAttr1 < 0 || cardAttr2 < 0 || cardAttr3 < 0);
    return !(testBoolMax || testBoolmin || sunTotal > maxTotal);
  };

  validadeGeneral = () => {
    if (this.validateText() && this.validateAtt()) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleChange = ({ target }) => {
    const { name } = target;
    const value = (target.type === 'checkbox') ? target.checked : target.value;
    this.setState(() => ({
      [name]: value,
    }), this.validadeGeneral);
  };

  resetForn = () => {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
    });
  };

  onSaveButtonClick = () => {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardRare, cardImage, cardTrunfo, cards } = this.state;
    const saveCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardImage,
      cardTrunfo,
    };
    const array = cards;
    array.push(saveCard);
    this.setState(() => ({ cards: array }), this.resetForn);
    console.log(cards);
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardImage, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div className="principal">
        <h1 className="title-principal">Tryunfo</h1>
        <div className="forms-cards">
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.handleChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <div className="card">
            <Card
              cardName={ cardName }
              cardDescription={ cardDescription }
              cardAttr1={ cardAttr1 }
              cardAttr2={ cardAttr2 }
              cardAttr3={ cardAttr3 }
              cardImage={ cardImage }
              cardRare={ cardRare }
              cardTrunfo={ cardTrunfo }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
