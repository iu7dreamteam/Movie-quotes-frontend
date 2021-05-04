import React from 'react';
import {
    Container, Button,
} from 'react-bootstrap';

import UsernameField from './UsernameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

import * as val from '../constants/Validation';

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.bindValidation = this.bindValidation.bind(this);

        this.validators = [];
        this.usernameField = React.createRef();
        this.emailField = React.createRef();
        this.passwordField = React.createRef();
        this.repeatPasswordField = React.createRef();
    }

    // eslint-disable-next-line class-methods-use-this
    onSubmit(e) {
        let isValid = true;
        const password = this.passwordField.current.value;
        const repeatPassword = this.repeatPasswordField.current.value;

        for (let idx = 0; idx < this.validators.length && isValid; idx += 1) {
            isValid &&= this.validators[idx]();
        }

        const samePasswords = password !== repeatPassword;
        if (samePasswords) {
            isValid = false;
        }

        if (!isValid) {
            for (let idx = 0; idx < this.validators.length; idx += 1) {
                this.validators[idx](true);
            }

            if (samePasswords) {
                this.passwordField.current.entryField.current.setState({
                    valueState: val.INVALID,
                });
                this.repeatPasswordField.current.entryField.current.setState({
                    valueState: val.INVALID,
                });
            }

            e.preventDefault();
        }
    }

    bindValidation(validator) {
        this.validators.push(validator);
    }

    render() {
        return (
            <Container>
                <div className="text-center mt-4 mb-5">
                    <h2>
                        Создайте свою собственную
                        <br />
                        учётную запись
                    </h2>
                    <h3 className="font-weight-normal text-lowercase">
                        Это позволит Вам сохранять историю поиска
                    </h3>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col col-4">
                        <form onSubmit={this.onSubmit}>
                            <UsernameField
                                bindValidation={this.bindValidation}
                                ref={this.usernameField}
                            />
                            <EmailField
                                bindValidation={this.bindValidation}
                                ref={this.emailField}
                            />
                            <PasswordField
                                bindValidation={this.bindValidation}
                                ref={this.passwordField}
                            />
                            <PasswordField
                                bindValidation={this.bindValidation}
                                ref={this.repeatPasswordField}
                                placeholder="Repeat password"
                            />

                            <Button block variant="primary" type="submit" className="mt-4" id="signup-btn">
                                Создать аккаунт
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default SignUp;
