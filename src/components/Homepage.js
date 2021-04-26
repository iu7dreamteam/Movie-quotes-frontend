import React from 'react';
import {
    Container, InputGroup, FormControl, Button,
} from 'react-bootstrap';

class Homepage extends React.Component {
    constructor(props) {
        super(props);

        this.inputRef = React.createRef();
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        console.log(e);
        console.log(this.inputRef.current.value);
    }

    render() {
        return (
            <Container>
                <div
                    style={{
                        minHeight: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="container">
                        <div className="mb-4">
                            <h1>
                                MOVIE QOUTES
                            </h1>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <InputGroup>
                                <FormControl
                                    ref={this.inputRef}
                                    placeholder="Введите цитату..."
                                />
                                <InputGroup.Append>
                                    <Button variant="primary" type="submit">
                                        <i className="bi bi-search" />
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Homepage;
