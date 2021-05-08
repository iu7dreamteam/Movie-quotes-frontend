import React from 'react';

import EntryField from './EntryField';
import validateEmail from '../utility/validators/validateEmail';

class EmailField extends React.Component {
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
                bindValidation={this.props.bindValidation}
                validator={validateEmail}
                ref={this.entryField}
                defaultValue={this.props.defaultValue}
                placeholder="Email"
            />
        );
    }
}

export default EmailField;
