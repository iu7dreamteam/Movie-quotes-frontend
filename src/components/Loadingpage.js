import React from 'react';
import {
    Container, Spinner,
} from 'react-bootstrap';

class Loadingpage extends React.Component {
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
                        <h1 className="align-bottom">
                            Загрузка
                            {' '}
                            <Spinner animation="border mb-2" />
                        </h1>
                    </div>
                </div>
            </Container>
        );
    }
}

export default Loadingpage;
