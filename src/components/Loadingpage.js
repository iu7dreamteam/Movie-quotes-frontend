import React from 'react';
import {
    Spinner,
} from 'react-bootstrap';

class Loadingpage extends React.Component {
    render() {
        return (
            <div className={this.props.className}>
                <div
                    style={{
                        minHeight: '80vh',
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="container">
                        <h1 className="align-bottom text-center">
                            Загрузка
                            {' '}
                            <Spinner animation="border mb-2" />
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loadingpage;
