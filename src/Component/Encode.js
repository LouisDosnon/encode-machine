import React from "react";
import alphabet from "../data/alphabet";

// eslint-disable-next-line no-undef
class Encode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key1: { letter: "A", value: 1 }
        }
        this.changeKey1 = this.changeKey1.bind(this)
    }

    render () {
        return (
            <div>
                <h2>Encode</h2>
                <select id="key1" onChange={this.changeKey1}>
                    {alphabet.map((letter) => {
                        return (<option key={"1"+letter.letter} value={letter}>{letter.letter}</option>)
                    })}
                </select>
            </div>
        )
    }

    changeKey1(e) {
        this.setState({
            key1: e.target.value
        }, () => {
            console.log(this.state);
        })
    }
}

export default Encode;
