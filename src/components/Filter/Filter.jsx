import PropTypes from 'prop-types';

import React from 'react';

import { FiterInput, FilterLabel } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <FilterLabel>Find contacts by name</FilterLabel>
      <FiterInput
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        placeholder="Tipe search name"
        required
      />
    </>
  );
};
export default Filter;

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
