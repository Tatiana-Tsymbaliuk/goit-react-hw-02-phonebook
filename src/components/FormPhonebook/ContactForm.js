import React from 'react';


export default class ContactForm extends React.Component{



   handelSubmitForm=(e)=>{
    e.preventDefault();
    this.props.onSubmitForm(this.props);
   }     
 render(){  

   const {name, number, onChangeState}=this.props
     
       return( 
     <form onSubmit={this.handelSubmitForm}>
            <label>Name
               <input
      type="text"
      name="name"
      value={name}
      onChange={onChangeState}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
    />
            </label>
            <label>Number
            <input
  type="tel"
  name="number"
  value={number}
  onChange={onChangeState}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
           <button>Add contact</button> 
            </form> 
     )}
}



