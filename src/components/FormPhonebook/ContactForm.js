import React from 'react';
import { nanoid } from 'nanoid'

export default class ContactForm extends React.Component{
nameId=nanoid();
phoneId = nanoid();

   handelSubmitForm=(e)=>{
    e.preventDefault();
    this.props.onSubmitForm(this.props);
   }     
 render(){   
   const {name, number, onChangeState}=this.props
     
       return( <div>
     <form onSubmit={this.handelSubmitForm}>
            <label htmlFor={this.nameId}>Name
               <input
      type="text"
      name="name"
      value={name}
      id={this.nameId}
      onChange={onChangeState}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
            </label>
            <label htmlFor={this.phoneId}>Number
            <input
  type="tel"
  name="number"
  value={number}
  id={this.phoneId}
  onChange={onChangeState}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
           <button>Add contact</button> 
            </form> 
            
            <h2>Contacts</h2>
            <ul>
            {/* {this.contacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} - {contact.number}
          </li>
        ))}
            {this.contacts.map(({id, name})=>(<li key={id}>
        <p>{name}</p></li>))} */}
            </ul>
           
          </div>)}
}



