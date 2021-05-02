import React from 'react';

import Match from './Match';

class MatchList extends React.Component {
    render() {
        const matches = [];
        for (let i = 0; i < 100; i += 1) {
            matches.push(<Match
                name="Омерзительная восьмёрка"
                director="Квентин Тарантино"
                year="2015"
                genre="вестерн"
                cnt="5"
                to=""
                className="col col-md-4"
                //className="flex-wrap"
                //style={{ display: 'inline-block', marginRight: "25px" }}
                style={{ flexWrap: 'initial' }}
            />);
        }

        return (
            <div
                className="container-fluid py-2 mt-5"
                style={{
                    overflowX: 'auto',
                    whiteSpace: 'nowrap',
                }}
            >
                <div className="d-flex flex-row flex-nowrap">
                    {matches}
                </div>
            </div>
        );
    }
}

export default MatchList;
