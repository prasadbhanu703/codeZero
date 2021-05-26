import { useState } from "react"

const ContactForm = () => {
    const [name, SetName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [clicked, setClicked] = useState(false);
    return (
        <div className="main-div" >
           name : <input type="text" placeholder="name" value={name} onChange={(evt) => SetName(evt.target.value)} /> <br />
           email: <input type="text" placeholder="email" value={email} onChange={(evt) => setEmail(evt.target.value)} /> <br />
           phone: <input type="number" placeholder="phone" value={phone} onChange={(evt) => setPhone(evt.target.value)} /> <br />
        address : <input type="text" placeholder="address" value={address} onChange={(evt) => setAddress(evt.target.value)} /> <br />
          <button type="submit" value="Submit" onClick={() => setClicked(true)} style={{marginTop:"20px"}} className="button"> Submit </button>
          {/* <form> */}
          {clicked  ? <div style={{paddingTop:"20px"}}>
                        <b> Entered details are below</b> <br />
                       <b> Name : </b> {name} <br />
                       <b> Email : </b> {email} <br /> 
                       <b> Phone : </b>{phone} <br />
                       <b> Address : </b>{address} <br />
                        </div> : ""}
          {/* </form> */}
        </div>
    )
}

export default ContactForm;