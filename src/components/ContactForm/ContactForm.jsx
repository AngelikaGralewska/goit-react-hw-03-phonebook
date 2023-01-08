import React, { Component } from 'react';
import style from './ContactForm.module.css';


export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };


  // { name, value  } = target;

  inputChange = name  => event =>{
    const { target } = event; 

    this.setState({
      [name]: target.value,
    });
  };

  inputsSubmit = event => {
    event.preventDefault();

    const { onSubmit } = this.props;
    onSubmit(this.state);

    this.resetForm();
  };

  resetForm = () => {
    this.setState(() => ({
       name: '',
       number: '',
    }));
  };

  render() {
    return (
      <form className={style.phonebookInputs} onSubmit={this.inputsSubmit}>
        <label className={style.phonebookInput}>
        <h4 className={style.phonebookInputTitle}>Name:</h4>
          <input
            value={this.state.name}
            onChange={this.inputChange('name')}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.phonebookInput}>
          <h4 className={style.phonebookInputTitle}>Number:</h4>
          <input
            value={this.state.number}
            onChange={this.inputChange('number')}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type="submit" className={style.buttonAdd}>
          add contact
        </button>
      </form>
    );
  }
}
