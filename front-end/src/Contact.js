import { useState } from 'react';
import axios from 'axios';
const Contact =()=> {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleInquirySubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post("http://localhost:4000/inquiry", { name, email, phone,message });
          alert(response.data.message);
        } catch (error) {
          console.error("Error adding product to bag:", error);
        }
    };
    return (
        <section className="contact_section layout_padding">
            <div className="container px-0">
                <div className="heading_container ">
                    <h2 className="">
                        Contact Us
                    </h2>
                </div>
            </div>
            <div className="container container-bg">
                <div className="row">
                    <div className="col-lg-7 col-md-6 px-0">
                        <div className="map_container">
                            <div className="map-responsive">
                                {/*<iframe src="<google map Api link" width="600" height="300" frameBorder="0" style={{ border: 0, width: '100%', height: '100%' }} allowFullScreen></iframe>*/}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 px-0 ">
                        <form action="#" onSubmit={handleInquirySubmit}>
                            <div>
                                <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div>
                                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                            </div>
                            <div>
                                <input type="text" className="message-box" placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)}/>
                            </div>
                            <div className="d-flex ">
                                <button>
                                    SEND
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
