import React from 'react';

export default class TimeCode extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hovered: false,
        };
    }

    render() {
        const zeroPad = (num) => `0${num}`.substr(-2);

        const onMouseEnter = () => this.setState({ hovered: true });
        const onMouseLeave = () => this.setState({ hovered: false });
        const onClick = () => console.log(this.props.timecode);

        const timecodeStr = (
            `${zeroPad(this.props.timecode.hour)}:`
            + `${zeroPad(this.props.timecode.minute)}:`
            + `${zeroPad(this.props.timecode.second)}`
        );

        return (
            <li
                style={{
                    cursor: 'pointer',
                    textDecoration: (this.state.hovered ? 'underline' : 'none'),
                    ...this.props.style,
                }}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onClick={onClick}
                aria-hidden="true"
            >
                {timecodeStr}
            </li>
        );
    }
}
