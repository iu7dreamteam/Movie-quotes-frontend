import React from 'react';

import EntryField from './EntryField';
import validateEmail from '../utility/validators/validateEmail';

class EmailField extends React.Component {
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
                placeholder="Email"
                validator={validateEmail}
                ref={this.entryField}
            />
        );
    }
}

export default EmailField;
