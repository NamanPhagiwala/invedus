import React, { Component } from 'react';
import './home.css';
import { Link , useNavigate} from 'react-router-dom';
let contactData= [];
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            data: null
        }
    }
componentWillMount=()=>{
    let contact= localStorage.getItem('Count');
    if(contact !== null){
        contactData= []
        for(let i= 1 ; i <= contact; i++){
            let contactInfo= JSON.parse(localStorage.getItem('Contact '+i))
            contactData.push({
                'name': contactInfo.name,
                'mobile': contactInfo.mobile,
                'whatsapp' : contactInfo.whatsapp,
                'id': contactInfo.id,
                'type': contactInfo.type
            })   
        }
    }
    debugger;
    this.setState({ totalContacts: contactData.length})
}
deleteContact = (id) =>{
    let count = localStorage.getItem('Count')
    if(count > 0 ){
        count = Number(count)- 1;
    localStorage.setItem('Count', count)
    this.setState({ totalContacts: count})

    }
    localStorage.removeItem('Contact '+id)
    let element= document.getElementById(id)
    element.remove()
    
}
render(){
    return(
        <div class="container"> 
        <div style={{padding: "50px"}}> 
            {this.state.totalContacts !== 0 ? 
               <div className='contacts'> 
               <Link to='/addContact' > Add Contact</Link>
                <h2> Contact List</h2>
                <ul>
                    {contactData.map(contact => {
                        return (
                        <li id={contact.id}>
                            {contact.name} - {contact.mobile} - Whatsapp:{contact.whatsapp ? 'True' : 'False'} -Type: {contact.type} - <button onClick={()=> this.deleteContact(contact.id)}> Delete</button> - <Link to={'/editContact?id='+contact.id}>Edit</Link>
                        </li>
                        )
                    })
                    }
                </ul>
                </div>
            :
            <div> No Contacts Found, Please <Link to='/addContact' > Add Contact</Link>
            </div>
            }
        </div>
      </div>  
    );
}

}

export default Home;