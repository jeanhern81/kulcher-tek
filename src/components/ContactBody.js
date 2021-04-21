import React from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import emailjs from 'emailjs-com';

import '../index.css';

class ContactBody extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }
    
    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    

    handleSubmit = (event) => {
        event.preventDefault();

        const templateParams = {
            name: this.state.name + " (" + this.state.email + ")",
            email: this.state.email,
            message: this.state.message
            };

        console.log(event.target);

        this.setState({
            disabled: false,
            emailSent: true
        });
        
            emailjs
                .send('service_8zoyzog', 'template_ihya8pc', templateParams, 'user_jT65qxAmmUtUbOJ1GIplf')
                .then(
                function(response) {
                    console.log("EMAIL SUCCESSFULLY SENT", response.status, response.text);
                },
                function(error) {
                    console.log("EMAIL DID NOT SEND!", error);
                }
                );
    
            this.setState({
                name: "",
                email: "",
                message: ""
                });
            }



    render() {
        return(
            <div className='contactPage'>
                
            
            <Container fluid={false} className='py-5'>

            <h4>Contact Us</h4>

            <br />

            <p>We'd love to hear from you. If you have a show suggestion, feedback, or want to become a sponsor, feel free to fill out the contact form and we'll be in touch. </p>
            
            <br />

            <Card>
            <Card.Body>


            
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label htmlFor="full-name">Full Name</Form.Label>
                            <Form.Control id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label htmlFor="message">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea"rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="d-inline-block" variant="dark" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="d-inline success-msg"> Email Sent</p>}
                        {this.state.emailSent === false && <p className="d-inline err-msg"> Email Not Sent</p>}
                    </Form>
                
                    </Card.Body>
                    </Card>

            
            
                </Container>    

            </div>
            

        
        );
    
}

}

export default ContactBody;