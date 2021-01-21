import React from 'react'
import Button from "./Button";

const Header = (props) => {
    const onClick = () => {
        console.log("clicked");
    }
    return (
        <>
            <h3 >Heading {props.title}</h3>
            <Button color="green" text="hello" onClick={onClick} />
        </>
    )
}

export default Header
