import React from 'react';
import {
    Container, InputGroup, FormControl, Button,
} from 'react-bootstrap';
import {
    useHistory,
} from 'react-router-dom';

import '../styles/Homepage.css';

function SearchForm() {
    const history = useHistory();

    const onSubmit = (e) => {
        const quote = e.target[0].value;

        if (quote) {
            const searchParam = new URLSearchParams();

            searchParam.append('quote', quote);
            history.push(`/theater?${searchParam.toString()}`);
        }

        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <InputGroup id="searchGroup">
                <FormControl
                    id="searchInput"
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
    );
}

class Homepage extends React.Component {
    render() {
        return (
            <Container>
                <div
                    style={{
                        minHeight: '75vh',
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
                        <SearchForm />
                    </div>
                </div>
            </Container>
        );
    }
}

export default Homepage;
