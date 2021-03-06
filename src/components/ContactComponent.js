import React,{ useState } from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup, Label, Input, Col, FormFeedback} from 'reactstrap'
import {Link} from 'react-router-dom';

function Contact(props) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [telNum, setTelNum] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [contactType, setContactType] = useState('Tel.');
    const [message, setMessage] = useState('');
    const [touched, setTouched] = useState({
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
    })
    


    const handleBlur = (field) => (evt) => {
       setTouched({...touched, [field]: true}) ;
    }

    function validate(firstname, lastname, telnum, email){
        const errors = {
            firstname : '',
            lastname : '',
            telnum : '',
            email : ''
        }
        if(touched.firstname && firstname.length <3)
            errors.firstname = 'first name should be >=3 characters'
        else if(touched.firstname && firstname.length >10)
        errors.firstname = 'first name should be <=10 characters'

        if(touched.lastname && lastname.length <3)
            errors.lastname = 'last name should be >=3 characters'
        else if(touched.lastname && lastname.length >10)
        errors.lastname = 'last name should be <=10 characters'

        const reg = /^\d+$/;
        if(touched.telnum && !reg.test(telnum))
         errors.telnum = 'Tel. No. should only contain only number'

        if(touched.email && email.split('').filter(x => x==='@').length!==1)
            errors.email= 'E-Mail shold contain a @'

        return errors ;    

        
    
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        alert(JSON.stringify([firstName,lastName,telNum,email,agree,contactType, message]));
        

    }

    const errors = validate(firstName, lastName, telNum, email);
    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                <BreadcrumbItem><Link to="/home">Home</Link> </BreadcrumbItem>
                <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                </Breadcrumb>
              </div>
              <div className="col-12">
                  <h3>Contact Us</h3>
                  <hr />
              </div>
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 offset-sm-1">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                </div>
                <div className="col-12 col-md-9">
                    <Form>
                        <FormGroup row>
                            <Label htmlFor="firstname" md={2}>First Name</Label>
                            <Col md={10}>
                                <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} onBlur={handleBlur('firstname')} valid ={errors.firstname ===''} invalid ={errors.firstname !== ''}></Input>
                            <FormFeedback>{errors.firstname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="lastname" md={2}>Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} onBlur={handleBlur('lastname')} valid ={errors.lastname ===''} invalid ={errors.lastname !== ''}></Input>
                                <FormFeedback>{errors.lastname}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
                            <Col md={10}>
                                <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={telNum} onChange={e => setTelNum(e.target.value)} onBlur={handleBlur('telnum')} valid ={errors.telnum ===''} invalid ={errors.telnum !== ''}></Input>
                                <FormFeedback>{errors.telnum}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="email" md={2}>E-Mail</Label>
                            <Col md={10}>
                                <Input type="email" id="email" name="email" placeholder="E-Mail" value={email} onChange={e => setEmail(e.target.value)} onBlur={handleBlur('email')} valid ={errors.email ===''} invalid ={errors.email !== ''}></Input>
                                <FormFeedback>{errors.email}</FormFeedback>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:6, offset:2}}>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" name="agree" checked={agree} onClick={e => setAgree(e.target.checked)}/> {' '} 
                                        <strong>May we Contact You?</strong>
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md={{size:3, offset:1}}>
                                <Input type="select" name="contactType" value={contactType} onChange={e => setContactType(e.target.value)}>
                                    <option value="tel">Tel</option>
                                    <option value="email">E-Mail</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Label htmlFor="message" md={2}>Your Feedback</Label>
                            <Col md={10}>
                                <Input type="textarea" id="message" name="message" rows="12" onChange={e => setMessage(e.target.value)}></Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <Col md={{size:10, offset:2}}>
                                <Button type="submit" color="primary" onClick={handleSubmit}>Send Feedback</Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;