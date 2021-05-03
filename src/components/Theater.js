import React from 'react';
import { Container } from 'react-bootstrap';

import Player from './Player';
import TimeCodeList from './TimeCodeList';
import Match from './Match';
import MatchList from './MatchList';

const videoJsOptions = {
    autoplay: false,
    width: 16 * 63,
    height: 9 * 63,
    controls: true,
    controlBar: {
        pictureInPictureToggle: false,
    },
    sources: [
        {
            src: 'http://localhost:9090/Go/go-bmstu-2020-2-2.mp4',
            type: 'video/mp4',
        },
    ],
};

class Theater extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentMatchIdx: undefined,
        };
    }

    render() {
        const onClick = (e) => {
            console.log(e);
            if (typeof e.movieIdx === 'number') {
                this.setState({
                    currentMatchIdx: e.movieIdx,
                });
            }
        };

        const matches = [];
        for (let i = 0; i < 100; i += 1) {
            matches.push(<Match
                name="Омерзительная восьмёрка. Длинное название"
                director="Квентин Тарантино"
                year="2015"
                genre="вестерн"
                cnt="5"
                action={onClick}
                key={i}
                movieIdx={i}
                /*className="col col-md-4"*/
                style={{
                    background: (i === this.state.currentMatchIdx ? '#ECECEC' : '#ffffff'),
                    transform: 'scale(0.8)',
                    display: 'inline-flex',
                    width: '250px',
                    marginLeft: (i === 0 ? '-25px' : '-15px'),
                    marginRight: '-25px',
                }}
            />);
        }

        return (
            <Container>
                <div className="row justify-content-between mt-5">
                    <Player
                        {...videoJsOptions}
                        style={{ display: 'inline-flex' }}
                    />
                    <TimeCodeList
                        style={{ display: 'inline-flex' }}
                    />
                    <MatchList>
                        {matches}
                    </MatchList>
                </div>
            </Container>
        );
    }
}

export default Theater;
