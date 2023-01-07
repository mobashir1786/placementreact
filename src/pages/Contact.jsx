import React from 'react';

export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const message = event.target[2].value;

    console.log(name, email, message);
    alert("registered, see data in console")

    // axios.post("", { name: name, email: email, message: message })
    //   .then(res => {
    //     console.log(res)
    //     alert(res.data.message)
    //   }).catch(e => {
    //     console.log(e);
    //   })
  }
  return (
    <>
      <div className="contact">
        <div className="contactLeft">
          <h1>GET IN TOUCH</h1>
          <h3>please complete the form and we will get back to you.</h3>
        </div>
        <div className="contactRight">
          <form onSubmit={handleSubmit}>
            <label>Name</label><br />
            <input type="text" style={{ width: "25vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF" }} placeholder="Enter Your Name" /><br />
            <label tyle={{ marginTop: "15px" }}>Email</label><br />
            <input type="email" style={{ width: "25vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF" }} placeholder="Enter Your Email" /><br />
            <label tyle={{ marginTop: "15px" }}>Mobile Number</label><br />
            <input type="number" style={{ width: "25vw", borderRadius: "5px", height: "30px", backgroundColor: "#FFFFFF" }} placeholder="Enter Your Mobile Number" /><br /><br />
            <button className="btn btn-warning click" style={{ width: "25vw", borderRadius: "5px", height: "30px", backgroundColor: "#0B087B", color: "whitesmoke" }} type="submit" >Registor Now</button>
          </form>
        </div>
      </div>
    </>
  )
}

