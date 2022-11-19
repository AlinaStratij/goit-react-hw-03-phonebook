import PropTypes from 'prop-types';
import React from 'react';
import { nanoid } from 'nanoid';

import { FormInput, FormBtn, FormLabel } from './ContactForm.styled';

export default class ContactForm extends React.Component {
  state = {
    name: ``,
    number: '',
  };

  nameInputId = nanoid();
  numberInputId = nanoid();

  onFormChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onFormSubmit = event => {
    event.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.reset();
  };
  reset = () => {
    this.setState({ name: ``, number: '' });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <FormLabel htmlFor={this.nameInputId}>Name</FormLabel>
          <FormInput
            type="text"
            value={this.state.name}
            onChange={this.onFormChange}
            name="name"
            placeholder="Enter your name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            id={this.nameInputId}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor={this.numberInputId}>Number</FormLabel>
          <FormInput
            type="tel"
            value={this.state.number}
            onChange={this.onFormChange}
            name="number"
            placeholder="Enter your number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            id={this.numberInputId}
            required
          />
        </div>
        <FormBtn type="submit">Add contact</FormBtn>
      </form>
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
