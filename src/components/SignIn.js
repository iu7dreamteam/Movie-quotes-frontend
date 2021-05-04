import React from 'react';
import {
    Container, Button,
    Alert,
} from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import EmailField from './EmailField';
import PasswordField from './PasswordField';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.bindValidation = this.bindValidation.bind(this);

        this.validators = [];
        this.emailField = React.createRef();
        this.passwordField = React.createRef();
    }

    // eslint-disable-next-line class-methods-use-this
    onSubmit(e) {
        let isValid = true;

        for (let idx = 0; idx < this.validators.length && isValid; idx += 1) {
            isValid &&= this.validators[idx]();
        }

        if (!isValid) {
            for (let idx = 0; idx < this.validators.length; idx += 1) {
                this.validators[idx](true);
            }

            e.preventDefault();
        }

        if (isValid) {
            this.props.signIn(this.emailField.current.value, this.passwordField.current.value);
        }
        e.preventDefault();
    }

    bindValidation(validator) {
        this.validators.push(validator);
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />;
        }

        let alert = null;
        if (this.props.error) {
            alert = (
                <Alert variant="danger" className="mt-5">
                    <Alert.Heading>
                        {`Ошибка ${this.props.error.status}`}
                    </Alert.Heading>
                    <p>
                        {this.props.error.message}
                    </p>
                </Alert>
            );
        }

        return (
            <Container>
                <div className="text-center mt-4 mb-5">
                    <h3>
                        Войти в MOVIE QUOTES
                    </h3>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-4">
                        <form onSubmit={this.onSubmit}>
                            <EmailField
                                bindValidation={this.bindValidation}
                                ref={this.emailField}
                            />
                            <PasswordField
                                bindValidation={this.bindValidation}
                                ref={this.passwordField}
                            />

                            <Button block variant="primary" type="submit" className="mt-4" id="sign-in-btn">
                                Войти
                            </Button>
                        </form>

                        {alert}
                    </div>
                </div>
            </Container>
        );
    }
}

export default SignIn;
