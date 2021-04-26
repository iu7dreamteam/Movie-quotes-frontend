import React from 'react';
import { Image, Card } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Match extends React.Component {
    render() {
        return (
            <Card className="col col-md-3 mb-3" style={{ width: '150px', border: 'none' }}>
                <LinkContainer to={this.props.to}>
                    <Image style={{ marginBottom: '10px' }} width="150px" src={this.props.posterURL} />
                </LinkContainer>
                <LinkContainer to={this.props.to}>
                    <Card.Title>
                        {this.props.name}
                    </Card.Title>
                </LinkContainer>
                <Card.Text style={{ marginTop: '-10px', marginBottom: '5px' }}>
                    {this.props.director}
                    <br />
                    {this.props.year}
                    ,
                    {' '}
                    {this.props.genre}
                    <br />
                    Найдено:
                    {' '}
                    {this.props.cnt}
                </Card.Text>
            </Card>
        );
    }
}
Match.defaultProps = {
    posterURL: '../../assets/default/poster.png',
};

export default Match;
