import React from "react";

class RegisterForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){

        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" 
                    name="name" 
                    placeholder="Full name" 
                    value={this.state.name}
                    onChange={this.handleChange}
                    />

                <input type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                    />

                <input type="password" 
                    name="confirmPassword" 
                    placeholder="Confirm Password" 
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    />

                <input type="number" 
                    name="phoneNumber" 
                    placeholder="Phone Number" 
                    value={this.state.phoneNumber}
                    onChange={this.handleChange}
                    />

                <input type="submit"/>

            </form>
        )
    }

}

export default RegisterForm;