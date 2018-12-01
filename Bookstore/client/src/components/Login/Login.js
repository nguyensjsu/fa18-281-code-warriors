import React, {Component} from 'react';
import './Design.css'
import Header from '../Header/Header';
import bookstore from './images/book_store.jpg';
import { Link } from 'react-router-dom';
import axios from "axios/index";


class Login extends Component{

    constructor(props){
        super(props);
        this.state={
            Username: '',
            Password: '',
            message: ''
        }
    }

    handleLogin = (data) => {

        axios.post('http://localhost:3000/login',data).then((response) => {
            console.log(response);
            if(response.data == "true"){
                this.setState({
                    message: "Login Successfull!"
                })
            }
            else{
                this.setState({
                    message: "Login Failed!!"
                })
            }

        })

    }


    render(){
        return(
            <div className="container">
                <Header/>
                <div className="login-box col-md-4">
                    <img src={bookstore} className="book-style" />
                    <p style={{ color: "white"}}>LOGIN HERE</p> <br />
                    <div className="form-body">
                        <input type="text" placeholder="Username" className="form-element"
                               onChange={(event) => {
                                   this.setState({
                                       Username: event.target.value,
                                       type: true
                                   });
                               }}
                        />
                        <input  type="password" placeholder= "Password" className="form-element"
                                onChange={(event) => {
                                    this.setState({
                                        Password: event.target.value,
                                        type: true
                                    });
                                }}
                        />

                    </div>
                    <button type="button" className="btn button-design"
                            onClick={()=>this.handleLogin(this.state)}
                    >SIGNIN</button>
                    <br /><br />
                    <p style={{ color: "white" }}>Not a Member Already? <Link to="/signup">Signup here!!</Link> </p>
                    <p style={{ color: 'white'}}>{this.state.message}</p>
                </div>

            </div>


        );
    }
}

export default Login;