import React from 'react';
import { Container } from 'react-bootstrap';

import Player from './Player';
import TimeCodeList from './TimeCodeList';
import MatchList from './MatchList';

const videoJsOptions = {
    autoplay: false,
    width: 640,
    height: 360,
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
    render() {
        return (
            <Container>
                <div className="row justify-content-center mt-5">
                    <div className="col col-8">
                        <Player {...videoJsOptions} />
                    </div>
                    <TimeCodeList />
                    <MatchList />
                </div>
            </Container>
        );
    }
}

export default Theater;
