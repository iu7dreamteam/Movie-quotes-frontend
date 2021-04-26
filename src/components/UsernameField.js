import React from 'react';
import {
    InputGroup,
} from 'react-bootstrap';

import EntryField from './EntryField';
import validateUsername from '../utility/validators/validateUsername';

class UsernameField extends React.Component {
    constructor(props) {
        super(props);

        this.value = '';
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
