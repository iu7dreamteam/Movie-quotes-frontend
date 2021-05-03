import React from 'react';
import {
    Card, Popover, OverlayTrigger,
} from 'react-bootstrap';

import truncateIfOver from '../utility/text/truncateIfOver';

class Match extends React.Component {
    constructor(props) {
        super(props);

        this.doAction = this.doAction.bind(this);
    }

    doAction(e) {
        if (typeof this.props.action === 'function') {
            this.props.action({
                movieIdx: this.props.movieIdx,
                ...e,
            });
        }
    }

    render() {
        const moviePopover = (
            <Popover>
                <Popover.Title style={{ fontWeight: 'bold' }}>
                    {this.props.name}
                </Popover.Title>
                <Popover.Content>
                    <b>
                        Режиссёр:
                    </b>
                    {' '}
                    {this.props.director}
                    {' '}
                    <br />
                    <b>
                        Год:
                    </b>
                    {' '}
                    {this.props.year}
                    <br />
                    {' '}
                    <b>
                        Жанр:
                    </b>
                    {' '}
                    {this.props.genre}
                    <br />
                    <b>
                        Вхождений цитаты:
                    </b>
                    {' '}
                    {this.props.cnt}
                </Popover.Content>
            </Popover>
        );

        const quotePopover = (
            <Popover>
                <Popover.Content>
                    {this.props.quote}
                </Popover.Content>
            </Popover>
        );

        let quote = this.props.quote;
        if (quote) {
            quote = `\u00AB${truncateIfOver(quote, 80)}\u00BB`;
        }

        return (
            <Card
                className={this.props.className}
                style={{
                    ...this.props.style,
                    border: 'none',
                    whiteSpace: 'normal',
                }}
            >
                <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement="auto"
                    overlay={moviePopover}
                >
                    <div
                        style={{
                            cursor: 'pointer',
                        }}
                        onClick={this.doAction}
                        aria-hidden="true"
                    >
                        <Card.Img
                            src={this.props.posterURL}
                        />
                    </div>
                </OverlayTrigger>
                <div
                    className="mt-2"
                    style={{
                        cursor: 'pointer',
                    }}
                    onClick={this.doAction}
                    aria-hidden="true"
                >
                    <Card.Title>
                        {this.props.name}
                    </Card.Title>
                </div>
                <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement="auto"
                    overlay={quotePopover}
                >
                    <Card.Text
                        style={{
                            marginTop: '-10px',
                        }}
                    >
                        {quote}
                    </Card.Text>
                </OverlayTrigger>
            </Card>
        );
    }
}
Match.defaultProps = {
    posterURL: '../../assets/default/poster.png',
};

export default Match;
