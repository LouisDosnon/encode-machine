import React from "react";
import alphabet from "../data/alphabet";

// eslint-disable-next-line no-undef
class Decode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key1: { letter: "A", value: 1 },
            key2: { letter: "A", value: 1 },
            key3: { letter: "A", value: 1 },
            key4: { letter: "A", value: 1 },
            text: "",
            decodeText: ""
        }
        this.changeKey1 = this.changeKey1.bind(this);
        this.changeKey2 = this.changeKey2.bind(this);
        this.changeKey3 = this.changeKey3.bind(this);
        this.changeKey4 = this.changeKey4.bind(this);
        this.changeText = this.changeText.bind(this);
        this.decode = this.decode.bind(this);
    }

    render () {
        return (
            <div>
                <h2>Decode</h2>
                <select id="key1" onChange={this.changeKey1}>
                    {alphabet.map((letter) => {
                        return (<option key={"1"+letter.letter} value={JSON.stringify(letter)}>{letter.letter}</option>)
                    })}
                </select>
                <select id="key2" onChange={this.changeKey2}>
                    {alphabet.map((letter) => {
                        return (<option key={"2"+letter.letter} value={JSON.stringify(letter)}>{letter.letter}</option>)
                    })}
                </select>
                <select id="key3" onChange={this.changeKey3}>
                    {alphabet.map((letter) => {
                        return (<option key={"3"+letter.letter} value={JSON.stringify(letter)}>{letter.letter}</option>)
                    })}
                </select><select id="key4" onChange={this.changeKey4}>
                    {alphabet.map((letter) => {
                        return (<option key={"4"+letter.letter} value={JSON.stringify(letter)}>{letter.letter}</option>)
                    })}
                </select>
                <br/>
                <input type="text" onChange={this.changeText}/>
                <button onClick={this.decode}>decode</button>
                <p>{this.state.decodedText}</p>
            </div>
        )
    }

    changeKey1(e) {
        this.setState({
            key1: JSON.parse(e.target.value)
        }, () => {
            console.log(this.state);
        })
    }

    changeKey2(e) {
        this.setState({
            key2: JSON.parse(e.target.value)
        }, () => {
            console.log(this.state);
        })
    }

    changeKey3(e) {
        this.setState({
            key3: JSON.parse(e.target.value)
        }, () => {
            console.log(this.state);
        })
    }

    changeKey4(e) {
        this.setState({
            key4: JSON.parse(e.target.value)
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

    decode() {
        let decoded = "";
        let key = (this.state.key1.value * this.state.key2.value)
            + (this.state.key3.value * this.state.key4.value);
        // Décalage de chaque lettre du texte
        for (let char of this.state.text) {
            // Décalage de la lettre en fonction de la clé (shift)
            let charIndex = char.charCodeAt(0) - 65;  // Conversion de la lettre en index (A=0, B=1, ..., Z=25)
            charIndex = (charIndex - key);  // Appliquer le décalage
            console.log(charIndex)
            decoded += String.fromCharCode(charIndex + 65);
        }
        this.setState({
            decodedText: decoded
        }, () => {
            console.log(this.state)
        });
    }
}

export default Decode;
