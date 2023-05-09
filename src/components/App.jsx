
import React from 'react';

import FormPhonebook from 'components/FormPhonebook/FormPhonebook'

export class App extends React.Component {
  // state = {
  //   contacts: [],
  //   name: ''
  // }


  render() {
 
     return <div>
  <h1>Ponebook</h1>
   <FormPhonebook/>
     

<div>
  <h2>Contacts</h2>
  <ul>
    <li>{this.state.name}</li>
  </ul>
</div>
    </div>
  }
};

