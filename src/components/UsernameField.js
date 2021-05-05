import React from 'react';
import {
    InputGroup,
} from 'react-bootstrap';

import EntryField from './EntryField';
import validateUsername from '../utility/validators/validateUsername';

class UsernameField extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.defaultValue) {
            this.value = this.props.defaultValue;
        } else {
            this.value = '';
        }
        this.entryField = React.createRef();
    }

    componentDidMount() {
        this.entryField.current.onChangeSubscribe((value) => {
            this.value = value;
        });
    }

    render() {
        return (
            <EntryField
                defaultValue={this.props.defaultValue}
                bindValidation={this.props.bindValidation}
                placeholder="Username"
                validator={validateUsername}
                ref={this.entryField}
            >
                <InputGroup.Prepend>
                    <InputGroup.Text>@</InputGroup.Text>
                </InputGroup.Prepend>
            </EntryField>
        );
    }
}

export default UsernameField;
