import React from 'react'

const Spinner = (props) => {
    return (
        <div className="ui segment spinner">
            <div className="ui active dimmer">
                <div className="ui text loader">{props.loadMessage}</div>
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    loadMessage : 'Loading..'
}
export default Spinner;