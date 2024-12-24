import React from "react";
import alphabet from "../data/alphabet";

const rotor1 = ['Z', 'X', 'Y', 'V', 'T', 'R', 'Q', 'P', 'O', 'N', 'M', 'L', 'K', 'J', 'I', 'H', 'G', 'F', 'E', 'D', 'C', 'B', 'A', 'W', 'U', 'S'];
const rotor2 = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];
const rotor3 = ['M', 'N', 'B', 'V', 'C', 'X', 'Z', 'L', 'K', 'J', 'H', 'G', 'F', 'D', 'S', 'A', 'P', 'O', 'I', 'U', 'Y', 'T', 'R', 'E', 'W', 'Q'];
const rotor4 = ['P', 'L', 'M', 'K', 'N', 'I', 'J', 'U', 'H', 'Y', 'G', 'V', 'T', 'F', 'C', 'R', 'D', 'X', 'E', 'S', 'Z', 'A', 'W', 'Q', 'O', 'B'];
const reflector = ['Y', 'R', 'U', 'H', 'Q', 'S', 'L', 'D', 'P', 'X', 'N', 'G', 'O', 'K', 'M', 'I', 'E', 'B', 'F', 'Z', 'C', 'W', 'V', 'J', 'A', 'T'];

// eslint-disable-next-line no-undef
class Enigma extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key1: 0,
            key2: 0,
            key3: 0,
            key4: 0,
            text: "",
            encodeText: ""
        }
        this.changeKey1 = this.changeKey1.bind(this);
        this.changeKey2 = this.changeKey2.bind(this);
        this.changeKey3 = this.changeKey3.bind(this);
        this.changeKey4 = this.changeKey4.bind(this);
        this.changeText = this.changeText.bind(this);
        this.encode = this.encode.bind(this);
    }

    render () {
        return (
            <div>
                <h2>Juges des Âmes Loyales Opposées à l'Ultime</h2>
                <h3>Par la juge</h3>
                <select id="key1" onChange={this.changeKey1}>
                    {rotor1.map((letter, index) => {
                        return (<option key={"1"+letter} value={index}>{letter}</option>)
                    })}
                </select>
                <select id="key2" onChange={this.changeKey2}>
                    {rotor2.map((letter, index) => {
                        return (<option key={"2"+letter} value={index}>{letter}</option>)
                    })}
                </select>
                <select id="key3" onChange={this.changeKey3}>
                    {rotor3.map((letter, index) => {
                        return (<option key={"3"+letter} value={index}>{letter}</option>)
                    })}
                </select>
                <select id="key4" onChange={this.changeKey4}>
                    {rotor4.map((letter, index) => {
                        return (<option key={"4"+letter} value={index}>{letter}</option>)
                    })}
                </select>
                <br/>
                <input type="text" onChange={this.changeText}/>
                <button onClick={this.encode}>encode/decode</button>
                <p>{this.state.encodedText}</p>
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

    encode() {
        let pos1 = this.state.key1;
        let pos2 = this.state.key2;
        let pos3 = this.state.key3;
        let pos4 = this.state.key4;
        let encoded =  this.state.text
            .toUpperCase()
            .split("")
            .map((char) => {
                let encodedChar = this.encodeChar(char, pos1, pos2, pos3, pos4);
                if (pos1 + 1 >= 26){
                    pos1 = 0;
                    if (pos2 + 1 >= 26) {
                        pos2 = 0
                        if (pos3 + 1 >= 26) {
                            pos3 = 0;
                            pos4 = (pos4 + 1) % 26;
                        } else {
                            pos3++;
                        }
                    } else {
                        pos2++;
                    }
                } else {
                    pos1++;
                }
                console.log(pos1, pos2, pos3, pos4);
                return encodedChar;
            })
            .join("");
        this.setState({
            encodedText: encoded
        }, console.log(this.state))
    }

    encodeChar(char, pos1, pos2, pos3, pos4) {
        if (!/[A-Z]/.test(char)) return char; // Ignorer les caractères non-alphabétiques
    
        let index = char.charCodeAt(0) - 65;
        console.log(index);
    
        // Passer à travers les rotors (entrée)
        index = (index + pos1) % 26;
        console.log(rotor1[index], index)
        index = rotor1[index].charCodeAt(0) - 65;
        index = (index + pos2) % 26;
        console.log(rotor2[index], index)
        index = rotor2[index].charCodeAt(0) - 65;
        index = (index + pos3) % 26;
        console.log(rotor3[index], index)
        index = rotor3[index].charCodeAt(0) - 65;
        index = (index + pos4) % 26;
        console.log(rotor4[index], index)
        index = rotor4[index].charCodeAt(0) - 65;
        
        // Réflecteur
        index = reflector[index].charCodeAt(0) - 65;
        console.log("reflector",index)
    
        // Passer à travers les rotors (sortie, dans l'autre sens)
        index = rotor4.indexOf(String.fromCharCode(65 + index));
        index = (index - pos4 + 26) % 26;
        index = rotor3.indexOf(String.fromCharCode(65 + index));
        index = (index - pos3 + 26) % 26;
        index = rotor2.indexOf(String.fromCharCode(65 + index));
        index = (index - pos2 + 26) % 26;
        index = rotor1.indexOf(String.fromCharCode(65 + index));
        index = (index - pos1 + 26) % 26;
    
        // Retourner le caractère encodé
        return String.fromCharCode(65 + index);
    }
}

export default Enigma;
