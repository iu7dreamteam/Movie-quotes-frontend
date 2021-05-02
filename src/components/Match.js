import React from 'react';
import {
    Card, Popover, OverlayTrigger,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import truncateIfOver from '../utility/text/truncateIfOver';

class Match extends React.Component {
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
            quote = `"${truncateIfOver(quote, 80)}"`;
        }

        return (
            <Card
                className={this.props.className}
                style={{
                    ...this.props.style,
                    border: 'none',
                }}
            >
                <OverlayTrigger
                    trigger={['hover', 'focus']}
                    placement="auto"
                    overlay={moviePopover}
                    className="d-flex"
                >
                    <LinkContainer
                        to={this.props.to}
                        style={{
                            cursor: 'pointer',
                        }}
                    >
                        <Card.Img
                            src={this.props.posterURL}
                        />
                    </LinkContainer>
                </OverlayTrigger>
                <LinkContainer
                    to={this.props.to}
                    className="mt-2"
                    style={{
                        cursor: 'pointer',
                    }}
                >
                    <Card.Title>
                        {this.props.name}
                    </Card.Title>
                </LinkContainer>
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
