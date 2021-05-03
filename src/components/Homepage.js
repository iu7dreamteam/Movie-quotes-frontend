import React from 'react';
import {
    Container, InputGroup, FormControl, Button,
} from 'react-bootstrap';

import '../styles/Homepage.css';

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
                            <h1 className="text-center">
                                MOVIE QUOTES
                            </h1>
                        </div>
                        <form onSubmit={this.onSubmit}>
                            <InputGroup id="searchGroup">
                                <FormControl
                                    id="searchInput"
                                    ref={this.inputRef}
                                    placeholder="Введите цитату..."
                                    style={{
                                        height: '48px',
                                    }}
                                />
                                <InputGroup.Append>
                                    <Button
                                        id="searchButton"
                                        variant="primary"
                                        type="submit"
                                        style={{
                                            height: '48px',
                                        }}
                                    >
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
