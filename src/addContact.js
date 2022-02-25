import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class addContact extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    addContact=(e)=>{
        debugger;
        let select = document.getElementById('answer');
        let text = select.options[select.selectedIndex].text;
        this.setState({ type: text})
        if(!this.state.name){
            e.preventDefault();
        }
        else{
           let count= localStorage.getItem("Count") ? localStorage.getItem("Count") : 0;
            count = Number(count) + 1
            let contactInfo = {
                "name": this.state.name,
                "mobile": this.state.mobileNumber,
                "whatsapp": this.state.whatsapp,
                "id": count,
                'type': text
            } 
        let list= JSON.stringify(contactInfo)
        localStorage.setItem("Count", count)
        localStorage.setItem('Contact '+count, list)
        }
        
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
render(){
    return(
        <div>
        <div class="container"> 
            <form>
            <div class="user_input-label">Name *</div>
				<input
					onChange={(e) => this.updateUserField(e, 'userName') }
					name="username"
					className=""
					type="text"
					maxLength="50"
					autoComplete="off"
					placeholder=""
		        />
                <div class="user_input-label">Mobile Number *</div>
				<input
					onChange={(e) => this.updateUserField(e, 'mobile') }
					name="username"
					className=""
					type="text"
					maxLength="10"
					autoComplete="off"
					placeholder=""
		        />
                <div class="user_input-label">IsWhatsapp ? </div>
				<label>
                <input
					onChange={(e) => this.updateUserField(e, 'true') }
					name="username"
					className=""
					type="radio"
		        /> True </label>
                <label>
                <input
					onChange={(e) => this.updateUserField(e, 'false') }
					name="username"
					className=""
					type="radio"
		        /> False </label>
                <div class="user_input-label">Profile Picture *</div>
                <input type="file" id="myFile" name="filename"/> <br/>
                <div class="user_input-label"> Type </div>
                 <select id="answer">
                <option disabled selected >Select</option> 
                    <option value='office'> Office</option>
                    <option value='personal'> Personal</option>

                </select> <br/>
                <button onClick={(e)=> this.addContact(e)}><Link to="/">Create Contact </Link></button>       

            </form>
        </div>
      </div>  
    )
}

}

export default addContact;