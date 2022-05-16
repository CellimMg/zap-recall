import React from "react";
import "./FlipCard.css";
import Button from "./button/Button";

import iconFlip from "../../../../assets/rotacao-icon.svg";
export default function FlipCard({ pergunta, resposta, index, setFlash }) {

    const [flipped, setFlipped] = React.useState(false);

    function setFlip() {
        setFlipped(true);
    }

    return (
        <div className={`card opened flipper ${flipped ? "flipped" : ""}`}>
            <div className="front">
                <span className="flip-text">{pergunta}</span>
                <img className="icon-flip" onClick={() => setFlip()} src={iconFlip} alt="Ícone flip"></img>
            </div>
            <div className="back">
                <span className="flip-text">{resposta}</span>
                <div className="buttons">
                    <Button onTap={() => setFlash(index, "wrong")} color={"#FF3030"} title={"Não Lembrei"} />
                    <Button onTap={() => setFlash(index, "close")} color={"#FF922E"} title={"Quase Não Lembrei "} />
                    <Button onTap={() => setFlash(index, "right")} color={"#2FBE34"} title={"Zap!"} />
                </div>
            </div>
        </div>
    );

}