
import React from 'react';

import ContactForm from 'components/FormPhonebook/ContactForm'

export class App extends React.Component{
  state = {
    contacts: [],
    name: '',
    number: '',
    }  
    handelChange = (e) =>{
      const { name, value} = e.target;
      this.setState({ [name]: value });  
      console.log(this.state);
    }
    handleSubmit = (data) => {
      console.log(data)
  
      // this.onAddContact({ ...this.state });
      //this.setState({ name: "", number: "" });
    };


    render(){
  return (<div>
      <h1>Phonebook</h1>
      <ContactForm onChangeState={this.handelChange} onSubmitForm={this.handleSubmit}/>
      
    </div>)
  
    }
}

