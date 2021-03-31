import React, { Component } from 'react';
import PropTypes from 'prop-types';
export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e);
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  contactChek = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;
    const namesIsIn = contacts.find(
      el => name.toLowerCase() === el.name.toLowerCase(),
    );
    const numbersIsIn = contacts.find(
      el => name.toLowerCase() === el.name.toLowerCase(),
    );

    if (namesIsIn || numbersIsIn) {
      alert(`${name}${number} is already in contacts`);
    }

    if (name === '' || number === '') {
      alert('Enter all data, please');
    }
  };

  handleSubmit = e => {
    const { name, number } = this.state;

    e.preventDefault();
    this.setState({ name: '', number: '' });
    if (this.contactChek()) {
      return;
    }

    this.props.onSubmit(name, number);
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label className="form__label">
          <h3 className="form__title">Name</h3>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>
        <label>
          <h3 className="form__title">Phone</h3>
          <input
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.handleChange}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
        </label>
        <button type="submit" className="form__btn">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onSubmit: PropTypes.func.isRequired,
};
