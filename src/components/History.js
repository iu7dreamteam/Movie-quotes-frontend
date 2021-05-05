import React from 'react';
import { Container, CardColumns } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';

import Match from './Match';
import Theater from '../views/Theater';

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
    constructor(props) {
        super(props);
        this.props.showWatchHistory(this.props.user.username);
    }

    render() {
        if (!this.props.isAuthenticated) {
            return <Redirect to="/login" />;
        }

        const searchParams = new URLSearchParams(this.props.location.search);
        if (searchParams.has('idx') && this.props.watchHistory.watches.length) {
            const watchIdx = parseInt(searchParams.get('idx'), 10);
            return <Theater historyMode watchIdx={watchIdx} />;
        }

        const MatchWrapper = () => {
            const history = useHistory();

            const onClick = (e) => history.push(`/history?idx=${e.movieIdx}`);

            const matches = this.props.watchHistory.watches.map(({ quote, movie, quotes }, idx) => (
                <Match
                    movieIdx={idx}
                    key={movie.id}
                    name={movie.title}
                    year={movie.year}
                    director={movie.director}
                    posterURL={movie.poster}
                    cnt={quotes.length}
                    quote={quote}
                    action={onClick}
                    style={{ width: '350px' }}
                />
            ));

            return (
                <div>
                    {splitMatchesToRows(matches, 3)}
                </div>
            );
        };

        return (
            <Container>
                <div className="mt-4 mb-5 text-center">
                    <h2>История просмотра</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col col-12">
                        <MatchWrapper />
                    </div>
                </div>
            </Container>
        );
    }
}

export default History;
