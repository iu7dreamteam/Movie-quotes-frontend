import React from 'react';
import {
    Container, Button,
} from 'react-bootstrap';

import UsernameField from './UsernameField';
import EmailField from './EmailField';
import PasswordField from './PasswordField';

import * as val from '../constants/Validation';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
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

        if (password !== repeatPassword) {
            isValid = false;
        }

        if (!isValid) {
            for (let idx = 0; idx < this.validators.length; idx += 1) {
                this.validators[idx](true);
            }
            this.passwordField.current.entryField.current.setState({ valueState: val.INVALID });
            this.repeatPasswordField.current.entryField.current.setState({ valueState: val.INVALID });
            e.preventDefault();
        }
    }

    // eslint-disable-next-line class-methods-use-this
    onClick(e) {
        switch (e.target.id) {
        case 'sigup-btn':
            break;
        default:
            break;
        }
    }

    bindValidation(validator) {
        this.validators.push(validator);
    }

    render() {
        return (
            <Container>
                <div className="text-center mt-5 mb-4">
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

                            <Button block variant="primary" type="sumbit" className="mt-4" id="signup-btn">
                                Создать аккаунт
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Signup;
