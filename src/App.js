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
      findName: '',
      findRarity: 'todas',
      trunfoFind: false,
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

  validadeTrunfo = () => {
    const { cardTrunfo } = this.state;

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
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
    this.validadeTrunfo();
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

  handleDeleteCard = (cardClicked) => {
    const { cards } = this.state;
    const { cardTrunfo } = cardClicked;
    if (cardTrunfo) {
      this.setState({ hasTrunfo: false });
    }
    const newCards = cards;
    const index = newCards.indexOf(cardClicked);
    newCards.splice(index, 1);
    console.log(cardClicked);
    this.setState({ cards: newCards });
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

  filterAll = () => {
    const { cards, findName, findRarity, trunfoFind } = this.state;

    if (trunfoFind) {
      return cards.filter((element) => (element.cardTrunfo));
    }

    if (findName && (findRarity === 'todas')) {
      console.log('Procura nomes');
      return cards.filter((element) => (element.cardName.toLowerCase()
        .includes(findName.toLowerCase())));
    }
    if (!findName && (findRarity !== 'todas')) {
      console.log('procura raridades');
      return cards.filter((element) => (element.cardRare === findRarity));
    }
    if (findName && (findRarity !== 'todas')) {
      console.log('procura nomes e raridaes');
      return cards.filter((element) => (element.cardName.toLowerCase()
        .includes(findName.toLowerCase())))
        .filter((element) => (element.cardRare === findRarity));
    }
    return cards;
  };

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardRare,
      cardImage, cardTrunfo, hasTrunfo, isSaveButtonDisabled,
      findName, findRarity, trunfoFind } = this.state;
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
        <div>
          <h3>Todas as cartas</h3>
          <label htmlFor="findName">
            Pesquisar nome:
            <input
              onChange={ this.handleChange }
              type="text"
              id="findName"
              name="findName"
              data-testid="name-filter"
              value={ findName }
              disabled={ trunfoFind }
            />
          </label>
          <label htmlFor="findRarity">
            <select
              name="findRarity"
              id="findRarity"
              onChange={ this.handleChange }
              value={ findRarity }
              data-testid="rare-filter"
              disabled={ trunfoFind }
            >
              <option value="todas">todas</option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfoFind">
            Super Trunfo
            <input
              type="checkbox"
              name="trunfoFind"
              id="trunfoFind"
              data-testid="trunfo-filter"
              onChange={ this.handleChange }
              checked={ trunfoFind }
            />
          </label>
          <div>
            {this.filterAll().map((element, index) => (
              <div key={ index }>
                <Card
                  cardName={ element.cardName }
                  cardDescription={ element.cardDescription }
                  cardAttr1={ element.cardAttr1 }
                  cardAttr2={ element.cardAttr2 }
                  cardAttr3={ element.cardAttr3 }
                  cardImage={ element.cardImage }
                  cardRare={ element.cardRare }
                  cardTrunfo={ element.cardTrunfo }
                />
                <button
                  data-testid="delete-button"
                  type="submit"
                  onClick={ () => this.handleDeleteCard(element) }
                >
                  Excluir

                </button>
              </div>))}

          </div>
        </div>
      </div>
    );
  }
}

export default App;
