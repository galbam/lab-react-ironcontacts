import React, { Component } from 'react';
import './App.css';
import ContactList from "./components/ContactList";
import contacts from './contacts.json';
import uGuid from 'uuid/v1';


class App extends Component {

  state = {
    contactList: contacts.map(obj => ({ ...obj, id: uGuid() })).slice(0, 5)
  }

  addRandomContact = () => {

    this.setState({
      contactList: this.getRandomMovie()
    });
  }

  sortByName = () => {

    this.setState({
      contactList: this.sortName()
    });
  }

  sortByPopularity = () => {

    this.setState({
      contactList: this.sortPopularity()
    });
  }

  deleteContact = (id) => {

    this.setState({
      contactList: this.delete(id)
    });
  }

  //UTILS
  getRandomMovie = () => {

    let random = contacts[Math.floor(Math.random() * contacts.length)];
    random["id"] = uGuid();

    let copy = this.state.contactList.slice();

    copy.unshift(random)

    return copy;
  }

  sortName() {
    
    let copy = this.state.contactList.slice();
    return copy.sort(this.compareName);
  }

  sortPopularity() {
    let copy = this.state.contactList.slice();
    return copy.sort(this.comparePopularity);
  }

  delete(id){
    return this.state.contactList.filter(f => {
      return f.id !== id
    });
  }

  compareName(a, b) {
    const genreA = a.name;
    const genreB = b.name;

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }

  comparePopularity(a, b) {
    const genreA = a.popularity;
    const genreB = b.popularity;

    let comparison = 0;
    if (genreA > genreB) {
      comparison = -1;
    } else if (genreA < genreB) {
      comparison = 1;
    }
    return comparison;
  }

  render() {
    return (
      <div>
        <ContactList contacts={this.state.contactList} addRandomContact={this.addRandomContact} sortByName={this.sortByName} sortByPopularity={this.sortByPopularity} deleteContact={this.deleteContact}/>
      </div>
    );
  }
}

export default App;
