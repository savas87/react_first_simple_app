import React from 'react'
const seasonConfig = {
    winter: {
        text : 'Burr, it is cold bro',
        iconName : 'snowflake'
    },
    sommer : {
        text: 'let get swimming',
        iconName: 'sun'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'sommer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth)
    const {text, iconName} =seasonConfig[season]; // text, iconName
    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />
        </div>
    )
}

export default SeasonDisplay