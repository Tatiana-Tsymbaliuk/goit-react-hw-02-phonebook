import React from 'react';


export default class ContactForm extends React.Component{
state={
  name: '',
  number: '',
}

handelChange = (e) =>{
  const { name, value} = e.target;
  this.setState({ [name]: value });  
  //console.log(this.state);
}
   handelSubmitForm=(e)=>{
    e.preventDefault();
    this.props.onSubmitForm({...this.state});
    this.setState({ name: "", number: "" });
   }     
 render(){  

   const {name, number}=this.state
    //  const {onChangeState}=this.props
       return( 
     <form onSubmit={this.handelSubmitForm}>
            <label>Name
               <input
      type="text"
      name="name"
      value={name}
      onChange={this.handelChange}
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
  onChange={this.handelChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
            </label>
           <button type='submit'>Add contact</button> 
            </form> 
     )}
}



