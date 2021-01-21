import React from 'react'
import Button from "./Button";

const Header = ({ onAdd, showAdd }) => {
    return (
        <>
            <h3 >Task Tracker</h3>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick={onAdd} />
        </>
    )
}

export default Header
