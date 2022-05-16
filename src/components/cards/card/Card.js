import "./Card.css";
import React from "react";
import FlipCard from "./flipcard/FlipCard";
import rightIcon from "../../../assets/right-icon.svg";
import wrongIcon from "../../../assets/wron-icon.svg";
import closeIcon from "../../../assets/close-icon.svg";
import arrowIcon from "../../../assets/arrow-icon.svg";

export default function Card({ index, flash, setFlash }) {
    const [answered, setAnswered] = React.useState(false);
    const [opened, setOpened] = React.useState(false);

    function changeOpened() {
        setOpened(true);
    }

    function onTapAnswer(index, status) {
        setAnswered(true);
        setOpened(false);
        setFlash(index, status);
    }

    function getColor() {
        if (flash.status === "wrong") {
            return "#FF3030";
        } else if (flash.status === "right") {
            return "#2FBE34";
        } else if (flash.status === "close") {
            return "#FF922E";
        } else {
            return "#333333";
        }
    }

    function getIcon() {
        if (flash.status === "wrong") {
            return wrongIcon;
        } else if (flash.status === "right") {
            return rightIcon;
        } else if (flash.status === "close") {
            return closeIcon;
        } else {
            return arrowIcon;
        }
    }

    if (!opened || answered) {
        return (
            <div className={`card`}>
                <span className={`${answered ? "answered-text" : ""}`} style={{ color: getColor() }}>Pergunta {index + 1}</span>
                <img alt="Ícone" src={getIcon()} onClick={answered ? () => { } : () => changeOpened()} />
            </div>
        );
    }
    return <FlipCard pergunta={flash.question} resposta={flash.answer} setFlash={onTapAnswer} index={index} />
}