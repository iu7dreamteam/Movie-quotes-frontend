import React from 'react';
import {
    InputGroup, FormControl,
} from 'react-bootstrap';

import * as val from '../constants/Validation';

class EntryField extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            valueState: val.NOT_VALIDATED,
        };
        this.value = '';

        this.onChange = this.onChange.bind(this);
        this.validate = this.validate.bind(this);

        this.props.bindValidation(this.validate);

        this.onChangeSubscribers = [];
    }

    onChange(e) {
        this.value = e.target.value;
        this.setState({ value: e.target.value });

        for (let idx = 0; idx < this.onChangeSubscribers.length; idx += 1) {
            this.onChangeSubscribers[idx](this.value);
        }
    }

    onChangeSubscribe(subscriber) {
        this.onChangeSubscribers.push(subscriber);
    }

    validate(updateState = false) {
        const isValid = this.props.validator(this.state.value);
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
                    type={this.props.type}
                />
            </InputGroup>
        );
    }
}

export default EntryField;
