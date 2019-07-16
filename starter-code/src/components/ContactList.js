import React, { Component } from 'react';
import Contact from "./Contact";
import uGuid from 'uuid/v1';

class ContactList extends Component {

     state = {
          elements: this.props.contacts.map(contact => {
               return <Contact key={uGuid()} contact={contact} />
          }).slice(0, 5)
     }

     addRandomContact = () => {

          this.setState({
               elements: this.getRandomMovie()
          });
     }

     sortByName = () => {
          
          this.setState({
               elements: this.sortName()
          });
     }

     sortByPopularity = () => {

          this.setState({
               elements: this.sortPopularity()
          });
     }

     deleteContact = (key) => {

          console.log(key);
     }

     //UTILS
     getRandomMovie = () => {

          let random = this.props.contacts[Math.floor(Math.random() * this.props.contacts.length)];
          let copy = this.state.elements.slice();

          const element = <Contact key={uGuid()} contact={random} deleteContact={this.deleteContact} />;

          copy.unshift(element)

          return copy;
     }

     sortName(){
          let copy = this.state.elements.slice();
          return copy.sort(this.compareName);
     }

     sortPopularity(){
          let copy = this.state.elements.slice();
          return copy.sort(this.comparePopularity);
     }

     compareName(a, b){
          const genreA = a.props.contact.name;
          const genreB = b.props.contact.name;

          let comparison = 0;
          if (genreA > genreB) {
               comparison = 1;
          } else if (genreA < genreB) {
               comparison = -1;
          }
          return comparison;
     }
     
     comparePopularity(a, b) {
          const genreA = a.props.contact.popularity;
          const genreB = b.props.contact.popularity;

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
                    <div style={{display: "flex", justifyContent: "center"}}>
                         <button style={{fontSize: "1.5rem"}} onClick={this.addRandomContact}>Add Random Contact</button>
                         <button style={{fontSize: "1.5rem"}} onClick={this.sortByName}>Sort by Name</button>
                         <button style={{fontSize: "1.5rem"}} onClick={this.sortByPopularity}>Sort by Popularity</button>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                         <table>
                              <thead>
                                   <tr>
                                        <th style={{textAlign: "center"}}><h1>Picture</h1></th>
                                        <th style={{textAlign: "center"}}><h1>Name</h1></th>
                                        <th style={{textAlign: "center"}}><h1>Popularity</h1></th>
                                        <th style={{textAlign: "center"}}><h1>Action</h1></th>
                                   </tr>
                              </thead>
                              <tbody>
                                   {this.state.elements}
                              </tbody>
                         </table>
                    </div>
               </div>
          );
     }
}

export default ContactList;