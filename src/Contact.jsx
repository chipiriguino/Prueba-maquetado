import React, { Component } from "react";
import './Contact.css';


class Contact extends Component {
  constructor(props) {
    super(props);
  this.state = { 
    fullname: "", 
    email: "",
    isError:{fullname:"",email:""}
    }
}

  handleChange = event => {
    const { name, value } = event.target;
    const regExp = RegExp(
      /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
    )
    let isError = { ...this.state.isError };

        switch (name) {
            case "fullname":
                isError.fullname =
                    value.length < 2  ? "Por favor rellena el campo nombre" : "";
                break;
            case "email":
                isError.email = regExp.test(value) ? "" : "Por favor escribe un email valido";
            break;
            default:
                break;
        }

       
    this.setState({ 
      isError,
      [name]: value 
    });
  };

  handleFormSubmit = async(event) => {
    try {
      event.preventDefault()
      await this.checkForErrors()
    } catch (error) {
      console.log(error)
    }
    
  };

  render() {
    const { fullname, email} = this.state;


    return (
      <div className="home-contact">
        <div className="align-top3">
        <div className="lorem-ipsum"><h3>Lorem ipsum</h3>
<p className="red-text">In quis varius tortor. Mauris eget rutrum lorem, ut tristique ipsum. In egestas augue sit amet ultrices tincidunt.</p>

Maecenas scelerisque arcu vitae leo volutpat malesuada. <b>Vivamus venenatis fringilla ligula</b>, sit amet facilisis neque semper vitae. Aenean porta, leo quis euismod blandit, massa arcu mollis lacus, <b>eu lacinia eros justo molestie velit.</b> Proin a enim dui. Sed vitae porta ipsum, ut vulputate purus.</div>

<div>

  <h2 className="red-box">”Consectetur adipiscing elit*, ut tristique ipsum.”</h2>
  <p className="grey-text">* Donec facilisis bibendum interdum.</p>
</div>

</div>
<div className="form-align">
      <div >
         <h4 className="contact-form">Form</h4>
      </div>
        

        <form onSubmit={this.handleFormSubmit}>

          <div >
          <label>Name :</label><input className="label-form" type="text" name="fullname" value={fullname}  onChange={e => this.handleChange(e)}  required/>
              {this.state.isError.fullname.length > 0 && (
              <span >{this.state.isError.fullname}</span>
              )}
          </div>
          
          <div >
              <label>E-mail:</label><input className="label-form"   type="email" name="email" value={email} placeholder="  example@address.com" onChange={this.handleChange} required/>
              {this.state.isError.email.length > 0 && (
              <span >{this.state.isError.email}</span>
              )}
          </div>
          <label className="check-box"><input  type="checkbox" id="cbox1" value="first_checkbox" /> Aceptar los términos de uso</label>
          <div >
          {this.state.warning !== '' } 
          <div className="send-botton">
          <input className="button"
                type="submit"
                value="Send"
              />
              </div>
          </div>
          </form>
          </div>
      </div>
    )
  }
}

export default Contact;

