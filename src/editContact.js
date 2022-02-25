import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class editContact extends Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
componentDidMount=()=>{
    debugger;
    let url = new URL(window.location.href);
	let contactId = url.searchParams.get("id");
    console.log(contactId);
    let editContact= JSON.parse(localStorage.getItem('Contact '+contactId))
    this.setState({name: editContact.name, mobileNumber: editContact.mobile, whatsapp: editContact.whatsapp, contactId: contactId})
}
updateUserField = (e, field) => {
    if (field === 'userName') {
        this.setState({ name: e.target.value})            
    } 
    else if (field === 'mobile') {
        this.setState({ mobileNumber: e.target.value})
    }
    else if (field === 'true') {
       this.setState({ whatsapp: true})
    }
    else if (field === 'false') {
        this.setState({ whatsapp: false})
     }
}
updateContact=(e)=>{
    debugger;
    if(!this.state.name){
        e.preventDefault();
    }
    else{
        debugger;
        let select = document.getElementById('answer');
        let text = select.options[select.selectedIndex].text;
       let count = this.state.contactId;
        let contactInfo = {
            "name": this.state.name,
            "mobile": this.state.mobileNumber,
            "whatsapp": this.state.whatsapp,
            "id": count,
            "type" : text
        } 
    let list= JSON.stringify(contactInfo)
    localStorage.setItem('Contact '+this.state.contactId, list)
    }

}
render(){
    return(
        <div className="container">
            <h1> Edit Contact</h1>
            <form>
            <div class="user_input-label">Name *</div>
				<input
					onChange={(e) => this.updateUserField(e, 'userName') }
					name="username"
					className=""
					type="text"
					maxLength="50"
					autoComplete="off"
					value={ this.state.name} 
		        />
                <div class="user_input-label">Mobile Number *</div>
				<input
					onChange={(e) => this.updateUserField(e, 'mobile') }
					name="username"
					className=""
					type="text"
					maxLength="10"
					autoComplete="off"
					value={this.state.mobileNumber}
		        />
                <div class="user_input-label">IsWhatsapp ? </div>
				<label>
                <input
					onChange={(e) => this.updateUserField(e, 'true') }
					name="username"
					className=""
					type="radio"
                    checked={this.state.whatsapp ? 'checked' : ""}
		        /> True </label>
                <label>
                <input
					onChange={(e) => this.updateUserField(e, 'false') }
					name="username"
					className=""
					type="radio"
                    checked={!this.state.whatsapp ? 'checked' : ''}
		        /> False </label>
                <div class="user_input-label">Profile Picture *</div>

                <input type="file" id="myFile" name="filename"/> <br/>
                <div class="user_input-label"> Type </div>
                 <select id="answer">
                <option disabled selected >Select</option> 
                    <option value='office'> Office</option>
                    <option value='personal'> Personal</option>

                </select> <br/>
                <button onClick={(e)=> this.updateContact(e)}><Link to="/">Save Contact</Link></button>       
            </form>
        </div>
    )
}

}

export default editContact;