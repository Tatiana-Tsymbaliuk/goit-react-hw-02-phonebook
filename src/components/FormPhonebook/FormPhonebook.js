import React from 'react';
import { nanoid } from 'nanoid'

export default class FormPhonebook extends React.Component{

  state = {
  contacts: [],
  name: ''
          }
          id = nanoid();
  
          handelChange = (e) =>{
            const { name, value } = e.target;
            this.setState({ [name]: value });
          }
          handelSubmit = (e)=>{
            e.preventDefault();
            console.log(this.state);
          }
        
          render() {
           const {name} = this.state
            return(
         <form onSubmit={this.handelSubmit}>
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
               <button>Add contact</button> 
                </form>
              
                )
        };  
