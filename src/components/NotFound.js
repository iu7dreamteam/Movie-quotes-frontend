import React from 'react';
import {
    Container
} from 'react-bootstrap';

class NotFound extends React.Component {
    render() {
        return (
            <Container>
                <div className="mt-5">
                    <h1>Ничего не найдено</h1>
                </div>
            </Container>
        );
    }
}

export default NotFound;
