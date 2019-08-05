import React, { Component } from 'react';

class Contact extends Component {   

     render() {

          return (<tr>
               <td><img src={this.props.contact.pictureUrl} style={{ width: "20vh", display: "block", marginLeft: "auto", marginRight: "auto" }} alt="x" /></td>
               <td style={{textAlign: "center"}}><h2>{this.props.contact.name}</h2></td>
               <td style={{textAlign: "center"}}><h2>{this.props.contact.popularity}</h2></td>
               <td style={{textAlign: "center"}}><button style={{fontSize: "1rem"}} onClick={this.props.deleteContact.bind(this, this.props.contact.id)}>Delete</button></td>
          </tr>);
     }
}

export default Contact;