import React from 'react';

import TimeCode from './TimeCode';

class TimeCodeList extends React.Component {
    render() {
        const timecodes = [];
        for (let i = 0; i < 100; i += 1) {
            timecodes.push(<TimeCode
                timecode={{
                    hour: 4,
                    minute: 20,
                    second: 0,
                    ms: 0,
                }}
                key={i}
                movie_id={i}
                style={{
                    marginTop: (i === 0 ? '0px' : '30px'),
                    marginBottom: '-25px',
                    marginRight: '10px',
                }}
            />);
        }

        return (
            <div style={this.props.style} className={`text-right ${this.props.className}`}>
                <div style={{ overflow: 'auto', maxHeight: `${9 * 63}px` }}>
                    <ul
                        style={{ listStyleType: 'none', width: '110px', paddingLeft: '0px' }}
                    >
                        {
                            timecodes
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default TimeCodeList;
