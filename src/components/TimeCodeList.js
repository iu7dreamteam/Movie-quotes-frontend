import React from 'react';

class TimeCodeList extends React.Component {
    render() {
        return (
            <div style={this.props.style} className={`text-right ${this.props.className}`}>
                <div style={{ overflow: 'auto', maxHeight: `${9 * 63}px` }}>
                    <ul
                        style={{ listStyleType: 'none', width: '110px', paddingLeft: '0px' }}
                    >
                        {this.props.children}
                    </ul>
                </div>
            </div>
        );
    }
}

export default TimeCodeList;
