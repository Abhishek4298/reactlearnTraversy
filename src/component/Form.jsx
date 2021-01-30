import React, { Component } from 'react';
class Form extends Component {
    state = {
        name: "Form",
        fullName: "",
        language: ""
    }

    // for handling username
    handleUsername = (event) => {
        this.setState({
            fullName: event.target.value
        })
    }

    // for handling language
    handleLanguage = (event) => {
        this.setState({
            language: event.target.value
        })
    }

    // Form submit
    handleSubmit = (event) => {
        alert(`${this.state.fullName} ${this.state.language}`)
        event.preventDefault();
    }

    render() {
        const { name, fullName, language } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{name}</h1>
                <br />

                <label>Enter name</label>
                <input type="text" value={fullName} onChange={this.handleUsername} />
                <br />
                <br />

                <select value={language} onChange={this.handleLanguage}>
                    <option value="react">React</option>
                    <option value="node"> Node</option>
                    <option value="nest">Nest</option>
                </select>
                <button type="submit">submit</button>
            </form>

        );
    }
}

export default Form;