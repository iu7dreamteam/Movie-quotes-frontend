import React from 'react';

export default class TimeCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false,
        };
    }

    render() {
        const onMouseEnter = () => this.setState({ hovered: true });
        const onMouseLeave = () => this.setState({ hovered: false });
        const timecodeStr = this.props.timecode.slice(0, 8);

        return (
            <li
                style={{
                    cursor: 'pointer',
                    textDecoration: (this.state.hovered ? 'underline' : 'none'),
                    ...this.props.style,
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={(e) => {
                    e.timecodeFromProps = this.props.timecode;
                    this.props.onClick(e);
                }}
                aria-hidden="true"
            >
                {timecodeStr}
            </li>
        );
    }
}
