import React from 'react';
import { Image, Card } from 'react-bootstrap';

class Match extends React.Component {
    render() {
        return (
            <Card style={{ width: '150px', border: 'none' }}>
                <Image style={{ marginBottom: '10px' }} width="150px" src="../../assets/default/poster.png" />
                <Card.Title>
                    {this.props.name}
                </Card.Title>
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

export default Match;
