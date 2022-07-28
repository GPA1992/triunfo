import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css';

class Filter extends Component {
  render() {
    const { filterName, filterRarity } = this.props;
    return (
      <div>
        <label htmlFor="name-filter">
          Nome da Carta
          <input
            onChange={ filterName }
            name="name-filter"
            type="text"
            data-testid="name-filter"
            placeholder="Nome da Carta"
          />
        </label>
        <label htmlFor="rare-filter">
          Raridade
          <select
            name="rare-filter"
            id="rare-filter"
            data-testid="rare-filter"
            onChange={ filterRarity }
          >
            <option value="todas">Todas</option>
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito Raro</option>
          </select>
        </label>
        <label className="trunfo-filter" id="trunfo-filter" htmlFor="trunfo-filter">
          <input
            name="trunfo-filter"
            data-testid="trunfo-filter"
            type="checkbox"
          />
          Super Trunfo
        </label>
      </div>
    );
  }
}
Filter.propTypes = {
  filterName: PropTypes.func.isRequired,
  filterRarity: PropTypes.func.isRequired,
};
export default Filter;
