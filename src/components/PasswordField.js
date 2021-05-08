import React from 'react';

import EntryField from './EntryField';
import validatePassword from '../utility/validators/validatePassword';

class PasswordField extends React.Component {
    constructor(props) {
        super(props);

        if (this.props.placeholder === undefined) {
            this.placeholder = 'Password';
        } else {
            this.placeholder = this.props.placeholder;
        }

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
                placeholder={this.placeholder}
                validator={validatePassword}
                ref={this.entryField}
                type="password"
            />
        );
    }
}

export default PasswordField;
