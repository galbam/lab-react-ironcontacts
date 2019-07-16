import React, { Component } from 'react';
import './App.css';
import ContactList from "./components/ContactList";
import contacts from './contacts.json';

class App extends Component {
  render() {
    return (
      <div>
        <ContactList contacts={contacts} />
      </div>
    );
  }
}

export default App;
