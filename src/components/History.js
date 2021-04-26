import React from 'react';
import { Container } from 'react-bootstrap';

import Match from './Match';

class History extends React.Component {
    render() {
        const matches = [];
        for (let i = 0; i < 19; i += 1) {
            matches.push({
                name: 'Омерзительная восьмёрка',
                director: 'Квентин Тарантино',
                year: '2015',
                genre: 'вестерн',
                cnt: 5,
            });
        }

        const matchesComponents = matches.map((item) => (
            <Match {...item} to={`${item.cnt}`} />
        ));

        return (
            <Container>
                <div className="mt-5 mb-4 text-center">
                    <h2>История поиска</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-8">
                        <div className="row justify-content-start">
                            {matchesComponents}
                        </div>
                    </div>
                </div>
            </Container>
        );
    }
}

export default History;
