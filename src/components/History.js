import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';

import Match from './Match';

function splitMatchesToRows(matches, rowLen) {
    const rows = [];

    for (let idx = 0; idx < matches.length; idx += rowLen) {
        rows.push(
            <CardColumns className="mb-2" key={idx}>
                {matches.slice(idx, idx + rowLen)}
            </CardColumns>,
        );
    }

    return rows;
}

class History extends React.Component {
    render() {
        const matches = [];
        for (let i = 0; i < 19; i += 1) {
            matches.push({
                name: (i !== 2 ? 'Омерзительная восьмёрка' : 'Очень-очень длинная омерзительная восьмёрка, аж на несколько строк. Очень много места занимает'),
                director: 'Квентин Тарантино',
                year: '2015',
                genre: 'вестерн',
                cnt: 5,
                quote: (i !== 2 ? 'Привет, Рост. Как дела? Тут вот очень длинная цитата для тебя.' : 'ddddddddddddddd dddddddddddddddddddd dddddddddd dddddddssssss  sssssss  sssssssssssss sssssssssd'),
                key: i,
            });
        }

        const matchesComponents = matches.map((item) => (
            <Match {...item} style={{ width: '350px' }} action={() => console.log('Movie history')} />
        ));

        return (
            <Container>
                <div className="mt-4 mb-5 text-center">
                    <h2>История просмотра</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-12">
                        {splitMatchesToRows(matchesComponents, 3)}
                    </div>
                </div>
            </Container>
        );
    }
}

export default History;
