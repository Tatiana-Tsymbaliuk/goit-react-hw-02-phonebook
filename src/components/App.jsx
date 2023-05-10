
import React from 'react';
import { nanoid } from 'nanoid'
import ContactForm from 'components/FormPhonebook/ContactForm'
import ContactList from 'components/ContactList/ContactList';
export class App extends React.Component{
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    name: '',
    number: '',
    }  
    
    handelChange = (e) =>{
      const { name, value} = e.target;
      this.setState({ [name]: value });  
      console.log(this.state);
    }
    handleSubmit = (e) => {
      //const { name, value} = e.target;
      this.setState({contacts:[...this.state.contacts,{ id: nanoid(), name: this.state.name, number: this.state.number}]});  
      console.log(this.state); 
    };
    // getContats =()=>{
    //  const {contacts}=this.state;
    //  console.log(contacts);
    // }

    render(){
     console.log(this.state);  
  return (<div>
      <h1>Phonebook</h1>
      <ContactForm onChangeState={this.handelChange} onSubmitForm={this.handleSubmit}/>
      <h2>Contacts</h2>
      <ContactList contacts={this.state.contacts}/>

    </div>)
  
    }
     
}

