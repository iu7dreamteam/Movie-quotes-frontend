import React from 'react';

import TimeCode from './TimeCode';

class TimeCodeList extends React.Component {
    render() {
        const timecodes = [];
        for (let i = 0; i < 100; i += 1) {
            timecodes.push(<TimeCode timecode="4:20" key={i} />);
        }

        return (
            <div>
                <div style={{ overflow: 'auto', maxHeight: '360px' }}>
                    <ul style={{ listStyleType: 'none', width: '150px' }}>
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
