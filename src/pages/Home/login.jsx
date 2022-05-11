import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import TableauEmbed from './TableauEmbed';
import { useHistory } from 'react-router-dom'

const Container = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
 padding-top: 100px;
 padding-bottom: 100px;
`
const Space = styled.div`
    margin-top: 1rem;
`
const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loggedIn,setLoggedIn] = useState(false);
    const history = useHistory();

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted")
    console.log("Email:",email,"Password:",password)
    if(email==="admin@gmail.com" && password==="admin")
    {
      history.push("/tableau")
    }
    console.log(setLoggedIn)
}

return (
<Container>
{loggedIn?<TableauEmbed/>:<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
  </Form.Group> 
  <Space/>
  <Button variant="primary" onClick={(e)=>handleSubmit(e)}>
    Submit
  </Button>
</Form>}

</Container>
    );
};

export default Login;