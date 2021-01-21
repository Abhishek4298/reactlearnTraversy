import React from 'react'
import Button from "./Button";

const Header = (props) => {
    const onClick = () => {
        console.log("clicked");
    }
    return (
        <>
            <h3 > {props.title}</h3>
            <Button color="green" text="Add" onClick={onClick} />
        </>
    )
}

export default Header
