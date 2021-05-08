import React from 'react';
import { Container } from 'react-bootstrap';

import Player from './Player';
import TimeCode from './TimeCode';
import TimeCodeList from './TimeCodeList';
import Match from './Match';
import MatchList from './MatchList';

class Theater extends React.Component {
    constructor(props) {
        super(props);

        this.playerRef = React.createRef();
        this.state = {
            currentMatchIdx: -1,
        };
    }

    componentDidMount() {
        if (!this.props.error && !this.props.isLoading && !this.props.historyMode) {
            const search = this.props.location.search;
            const searchParams = new URLSearchParams(search);
            const quote = searchParams.get('quote');

            if (quote && this.props.searchResult.quote !== quote) {
                this.props.searchMatches(quote);
            }
        }
    }

    render() {
        let matchesList = this.props.searchResult;
        if (this.props.historyMode) {
            const watch = this.props.watchHistory.watches[this.props.watchIdx];
            matchesList = {
                quote: watch.quote,
                matches: [watch],
            };
        }

        const videoJsOptions = {
            autoplay: false,
            width: 16 * 63,
            height: 9 * 63,
            controls: true,
            controlBar: {
                pictureInPictureToggle: false,
            },
            sources: [],
        };

        const onClickMatch = (e) => {
            if (typeof e.movieIdx === 'number') {
                this.setState({
                    currentMatchIdx: e.movieIdx,
                });
                this.playerRef.current.player.src(
                    {
                        src: matchesList.matches[e.movieIdx].movie.url,
                        type: 'video/mp4',
                    },
                );
                this.playerRef.current.player.poster(matchesList.matches[e.movieIdx].movie.poster);

                if (this.props.isAuthenticated && !this.props.historyMode) {
                    this.props.saveWatchToHistory({
                        movie_id: matchesList.matches[e.movieIdx].movie.id,
                        quote: matchesList.quote,
                        subtitle_ids: matchesList.matches[e.movieIdx]
                            .quotes.map((quote) => quote.id),
                    },
                    this.props.user.username);
                }
            }
        };

        const matches = matchesList.matches.map(({ movie, quotes }, idx) => (
            <Match
                movieIdx={idx}
                key={movie.id}
                name={movie.title}
                year={movie.year}
                director={movie.director}
                posterURL={movie.poster}
                cnt={quotes.length}
                action={onClickMatch}
                style={{
                    background: (idx === this.state.currentMatchIdx ? '#ECECEC' : '#ffffff'),
                    transform: 'scale(0.8)',
                    display: 'inline-flex',
                    width: '250px',
                    marginLeft: (idx === 0 ? '-25px' : '-15px'),
                    marginRight: '-25px',
                }}
            />
        ));

        const onClickTimecode = (e) => {
            // eslint-disable-next-line no-unused-vars
            const [timecodeStr, microseconds] = e.timecodeFromProps.split('.');
            const [hours, minutes, seconds] = timecodeStr.split(':').map((numStr) => parseInt(numStr, 10));
            const moveTo = hours * 60 * 60 + minutes * 60 + seconds;
            this.playerRef.current.player.currentTime(moveTo);
        };

        let timecodes = [];
        if (this.state.currentMatchIdx >= 0) {
            timecodes = matchesList
                .matches[this.state.currentMatchIdx]
                .quotes.map((quote, idx) => (
                    <TimeCode
                        key={quote.id}
                        timecode={quote.time}
                        onClick={onClickTimecode}
                        style={{
                            marginTop: (idx === 0 ? '0px' : '30px'),
                            marginBottom: '-25px',
                            marginRight: '10px',
                        }}
                    />
                ));
        }

        return (
            <Container>
                <div className="row justify-content-between mt-4">
                    <Player
                        {...videoJsOptions}
                        style={{ display: 'inline-flex' }}
                        ref={this.playerRef}
                    />
                    <TimeCodeList
                        style={{ display: 'inline-flex' }}
                    >
                        {timecodes}
                    </TimeCodeList>
                    <MatchList>
                        {matches}
                    </MatchList>
                </div>
            </Container>
        );
    }
}

export default Theater;
