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

export default EntryField;
