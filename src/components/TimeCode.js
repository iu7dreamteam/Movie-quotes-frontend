import React from 'react';
import { Button } from 'react-bootstrap';

export default class TimeCode extends React.Component {
    render() {
        return (
            <Button variant="link" onMouseUp={(e) => e.currentTarget.blur()}>
                <li>
                    {this.props.timecode}
                </li>
            </Button>
        );
    }
}
