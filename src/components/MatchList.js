import React from 'react';

class MatchList extends React.Component {
    render() {
        return (
            <div
                className={this.props.className}
                style={{
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    height: '185px',
                    whiteSpace: 'nowrap',
                    ...this.props.style,
                }}
            >
                {this.props.children}
            </div>
        );
    }
}

export default MatchList;
