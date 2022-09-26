import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <h3>ADICIONE NOVA CARTA</h3>
        <form action="">
          <label htmlFor="name">
            Nome
            <input type="text" id="name" name="name" data-testid="name-input" />
          </label>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              id="description"
              cols="20"
              rows="5"
              data-testid="description-input"
            />
          </label>
          <label htmlFor="attr1-input">
            Attr1
            <input
              type="number"
              id="attr1-input"
              name="attr1-input"
              data-testid="attr1-input"
            />
          </label>
          <label htmlFor="attr2-input">
            Attr2
            <input
              type="number"
              id="attr2-input"
              name="attr2-input"
              data-testid="attr2-input"
            />
          </label>
          <label htmlFor="attr3-input">
            Attr3
            <input
              type="number"
              id="attr3-input"
              name="attr3-input"
              data-testid="attr3-input"
            />
          </label>
          <label htmlFor="image-input">
            Imagem
            <input
              type="text"
              id="image-input"
              name="image-input"
              data-testid="image-input"
            />
          </label>
          <label htmlFor="rare-input">
            Raridade
            <select name="rare-input" id="rare-input" data-testid="rare-input">
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>
          <label htmlFor="trunfo-input">
            Super Trunfo
            <input
              id="trunfo-input"
              name="trunfo-input"
              type="checkbox"
              data-testid="trunfo-input"
            />
            <button type="button" data-testid="save-button">Salvar</button>
          </label>
        </form>
      </div>
    );
  }
}

export default Form;
