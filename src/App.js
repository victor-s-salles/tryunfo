import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
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

  onSaveButtonClick = () => 'a';

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardImage, cardTrunfo, hasTrunfo, isSaveButtonDisabled } = this.state;
    return (
      <div>
        <h1>Tryunfo</h1>
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
    );
  }
}

export default App;
