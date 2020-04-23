import React from 'react'

class SwitchClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          isOn: false
        }
    }

    render() {
        return (
            <>
            <h1>{this.state.isOn ? "ON" : "OFF"}</h1>
            <button>Switch</button>
            </>
        )
    }
}

export default SwitchClass