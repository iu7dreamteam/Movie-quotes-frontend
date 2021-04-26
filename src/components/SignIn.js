import React from 'react';
import {
    Container, Button,
} from 'react-bootstrap';

import EmailField from './EmailField';
import PasswordField from './PasswordField';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
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
    }

    // eslint-disable-next-line class-methods-use-this
    onClick(e) {
        switch (e.target.id) {
        case 'sign-in-btn':
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

                            <Button block variant="primary" type="sumbit" className="mt-4" id="sign-in-btn">
                                Войти
                            </Button>
                        </form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default SignIn;
