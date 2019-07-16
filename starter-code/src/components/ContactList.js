import React, { Component } from 'react';
import Contact from "./Contact";

class ContactList extends Component {

     render() {

          return (
               <div>
                    <div style={{display: "flex", justifyContent: "center"}}>
                         <button style={{fontSize: "1.5rem"}} onClick={this.props.addRandomContact}>Add Random Contact</button>
                         <button style={{fontSize: "1.5rem"}} onClick={this.props.sortByName}>Sort by Name</button>
                         <button style={{fontSize: "1.5rem"}} onClick={this.props.sortByPopularity}>Sort by Popularity</button>
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
                                   {this.props.contacts.map(contact => {
                                        
                                        return <Contact key={contact.id} contact={contact} deleteContact={this.props.deleteContact} />
                                   })}
                              </tbody>
                         </table>
                    </div>
               </div>
          );
     }
}

export default ContactList;