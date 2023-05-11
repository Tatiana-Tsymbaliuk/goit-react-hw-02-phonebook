
import React from 'react';
 import { nanoid } from 'nanoid'
import ContactForm from 'components/FormPhonebook/ContactForm'
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

export class App extends React.Component{
  state = {
    contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
    filter: '',
    // name: '',
    // number: '',
    }  
    
    // handelChange = (e) =>{
    //   const { name, value} = e.target;
    //   this.setState({ [name]: value });  
    //   console.log(this.state);
    // }
    handleSubmit = (data) => {
      const sameName = this.state.contacts
        .map((cont) => cont.name)
        .includes(data.name);
  
      if (sameName) {
        alert(`${data.name} is already in contacts`);
      } else {
        this.setState((prevState) => ({
          contacts: [...prevState.contacts, {id: nanoid(), ...data }],
        }));
      }
    };
    // () => {
    //   const {name, number} = this.state
    //   this.setState({contacts:[...this.state.contacts,{ id: nanoid(), name: name, number: number}]});  
    //   console.log(this.state); 
    // };
    
    changeFilter =(e)=>{
      this.setState({filter:e.currentTarget.value})
    }
    getVisibleContats =()=>{
      const {contacts, filter} = this.state
      console.log(this.state); 
      const normalizedFilter = filter.toLowerCase();
      return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    }

    render(){
      const {filter} = this.state
    const visibleContacts = this.getVisibleContats()

  return (<div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={this.handleSubmit}/>
      <h2>Contacts</h2>
     
      <Filter value={filter} onChangeFilter={this.changeFilter}/>
      <ContactList contacts={visibleContacts}/>

    </div>)
  
    }
     
}

