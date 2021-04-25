import React from 'react';
import {
    Container, InputGroup, FormControl, Button,
} from 'react-bootstrap';

import validateEmail from '../utility/validators/validateEmail';
import validateUsername from '../utility/validators/validateUsername';
import validatePassword from '../utility/validators/validatePassword';

import * as val from '../constants/Validation';

class EntryField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            valueState: val.NOT_VALIDATED,
        };

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);

        this.props.bindValidation(this.validate);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    validate(updateState = false) {
        const isValid = this.props.validate(this.state.value);
        if (updateState) {
            this.setState({ valueState: isValid ? val.VALID : val.INVALID });
        }
        return isValid;
    }

    render() {
        const isValid = this.state.valueState === val.VALID;
        const isInvalid = this.state.valueState === val.INVALID;

        return (
            <InputGroup className="mb-3">
                {this.props.children}
                <FormControl
                    onChange={this.onChange}
                    isValid={isValid}
                    isInvalid={isInvalid}
                    placeholder={this.props.placeholder}
                />
            </InputGroup>
        );
    }
}

//class UsernameField extends React.Component {
    //constructor(props) {
        //super(props);

        //this.state = {
            //value: '',
            //valueState: val.NOT_VALIDATED,
        //};

        //this.onChange = this.onChange.bind(this);
        //this.validate = this.validate.bind(this);

        //this.props.bindValidation(this.validate);
    //}

    //onChange(e) {
        //this.setState({ value: e.target.value });
    //}

    //validate(updateState = false) {
        //const isValid = validateUsername(this.state.value);
        //if (updateState) {
            //this.setState({ valueState: isValid ? val.VALID : val.INVALID });
        //}
        //return isValid;
    //}

    //render() {
        //const isValid = this.state.valueState === val.VALID;
        //const isInvalid = this.state.valueState === val.INVALID;

        //return (
            //<InputGroup className="mb-3">
                //<InputGroup.Prepend>
                    //<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                //</InputGroup.Prepend>
                //<FormControl onChange={this.onChange} isValid={isValid} isInvalid={isInvalid} placeholder="Username" />
            //</InputGroup>
        //);
    //}
//}

class EmailField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            valueState: val.NOT_VALIDATED,
        };

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);

        this.props.bindValidation(this.validate);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    validate(updateState = false) {
        const isValid = validateEmail(this.state.value);
        if (updateState) {
            this.setState({ valueState: isValid ? val.VALID : val.INVALID });
        }
        return isValid;
    }

    render() {
        const isValid = this.state.valueState === val.VALID;
        const isInvalid = this.state.valueState === val.INVALID;

        return (
            <InputGroup className="mb-3">
                <FormControl onChange={this.onChange} isValid={isValid} isInvalid={isInvalid} placeholder="Email" />
            </InputGroup>
        );
    }
}

class PasswordField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            valueState: val.NOT_VALIDATED,
        };

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);

        this.props.bindValidation(this.validate);
    }

    onChange(e) {
        this.setState({ value: e.target.value });
    }

    validate(updateState = false) {
        const isValid = validatePassword(this.state.value);
        if (updateState) {
            this.setState({ valueState: isValid ? val.VALID : val.INVALID });
        }
        return isValid;
    }

    render() {
        const isValid = this.state.valueState === val.VALID;
        const isInvalid = this.state.valueState === val.INVALID;

        return (
            <InputGroup className="mb-3">
                <FormControl onChange={this.onChange} isValid={isValid} isInvalid={isInvalid} type="password" placeholder="Password" />
            </InputGroup>
        );
    }
}

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.bindValidation = this.bindValidation.bind(this);

        this.validators = [];
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
                            <EntryField bindValidation={this.bindValidation} placeholder="Username" validate={validateUsername}>
                                <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                                </InputGroup.Prepend>
                            </EntryField>

                            <EmailField id="email-field" bindValidation={this.bindValidation} />

                            <PasswordField id="password-field" bindValidation={this.bindValidation}/>

                            <InputGroup className="mb-3" id="input-repeat-password">
                                <FormControl type="password" placeholder="Repeat password" />
                            </InputGroup>

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
