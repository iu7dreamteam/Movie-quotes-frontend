// taken from https://github.com/videojs/video.js/blob/master/docs/guides/react.md
import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import { Container } from 'react-bootstrap';

import '@videojs/themes/dist/fantasy/index.css';

export default class VideoPlayer extends React.Component {
    componentDidMount() {
        this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
    }

    componentWillUnmount() {
        if (this.player) {
            this.player.dispose();
        }
    }

    render() {
        return (
            <Container>
                <div>
                    <div data-vjs-player>
                        {/* eslint-disable-next-line jsx-a11y/media-has-caption,no-return-assign */}
                        <video ref={(node) => (this.videoNode = node)} className="video-js vjs-theme-fantasy" />
                    </div>
                </div>
            </Container>
        );
    }
}
