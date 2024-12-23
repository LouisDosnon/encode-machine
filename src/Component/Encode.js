import React from "react";
import alphabet from "../data/alphabet";

// eslint-disable-next-line no-undef
class Encode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key1: { letter: "A", value: 1 },
            key2: { letter: "A", value: 1 },
            key3: { letter: "A", value: 1 },
            key4: { letter: "A", value: 1 },
            text: "",
            encodeText: ""
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
                <select id="key2" onChange={this.changeKey2}>
                    {alphabet.map((letter) => {
                        return (<option key={"2"+letter.letter} value={letter}>{letter.letter}</option>)
                    })}
                </select>
                <select id="key3" onChange={this.changeKey3}>
                    {alphabet.map((letter) => {
                        return (<option key={"3"+letter.letter} value={letter}>{letter.letter}</option>)
                    })}
                </select><select id="key4" onChange={this.changeKey4}>
                    {alphabet.map((letter) => {
                        return (<option key={"4"+letter.letter} value={letter}>{letter.letter}</option>)
                    })}
                </select>
                <input type="text" onChange={this.changeText}/>
                <button onClick={this.encode}>encode</button>
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

    changeKey2(e) {
        this.setState({
            key2: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

    changeKey3(e) {
        this.setState({
            key3: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

    changeKey4(e) {
        this.setState({
            key4: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

    changeText(e) {
        this.setState({
            text: e.target.value
        }, () => {
            console.log(this.state);
        })
    }

    encode() {
        console.log((this.state.key1.value * this.state.key2.value)
            /(this.state.key3.value * this.state.key4.value))
    }
}

export default Encode;
