import Screen from "../common/Screen";
import Card from "./card/Card";
import Footer from "./footer/Footer";
import React from "react";
import rightIcon from "../../assets/right-icon.svg";
import wrongIcon from "../../assets/wron-icon.svg";
import closeIcon from "../../assets/close-icon.svg";
import happyIcon from "../../assets/happy-icon.svg";
import sadIcon from "../../assets/sad-icon.svg";
import logo from "../../assets/logo.png";
import "./Cards.css";


function randomizador() {
    return Math.random() - 0.5;
}

const data = [
    { question: "O que é JSX", answer: "Uma extensão de linguagem do JavaScript", status: null },
    { question: "O React é __", answer: "uma biblioteca JavaScript para construção de interfaces", status: null },
    { question: "Componentes devem iniciar com __", answer: "letra maiúscula", status: null },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões", status: null },
    { question: "O ReactDOM nos ajuda __", answer: "interagindo com a DOM para colocar componentes React na mesma", status: null },
    { question: "Usamos o npm para __", answer: "gerenciar os pacotes necessários e suas dependências", status: null },
    { question: "Usamos props para __", answer: "passar diferentes informações para componentes", status: null },
    { question: "Usamos estado (state) para __", answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente", status: null },
];

const dataRandomized = data.sort(randomizador);

export default function Cards() {

    const [flashes, setFlashes] = React.useState([...dataRandomized]);

    const [responses, setResponses] = React.useState([]);

    function attFlash(index, status) {
        flashes[index].status = status;
        setResponses([...responses, status]);
        setFlashes([...flashes]);
    }

    function getIcon(response) {
        if (response === "wrong") {
            return wrongIcon;
        } else if (response === "right") {
            return rightIcon;
        } else {
            return closeIcon;
        }
    }

    function getFinishText() {
        if (flashes.filter(flash => flash.status != null).length === flashes.length) {
            if (flashes.filter(flash => flash.status === "wrong").length > 0) {
                return (
                    <>
                        <div className="title"><img alt="Ícone" src={sadIcon} /> <span>Putz...</span></div>
                        <div><span>Ainda faltam alguns... Mas não desanime!</span></div>
                    </>
                );
            } else {
                return (
                    <>
                        <div className="title"><img alt="Ícone" src={happyIcon} /> <span>Parabéns!</span></div>
                        <div>Você não esqueceu de nenhum flashcard!</div>
                    </>
                );
            }
        }
    }


    return (
        <Screen>
            <div className="body">
                <div className="logo-text">
                    <img width="52px" height="60px" src={logo} alt="Logo" />
                    <span>ZapRecall</span>
                </div>

                <div className="cards" style={{ height: "100%" }}>
                    {flashes.map((flash, index) => <Card key={index} index={index} flash={flash} setFlash={attFlash} />)}
                </div>
            </div>
            <Footer>
                {getFinishText()}
                <span>{flashes.filter(flash => flash.status != null).length}/{flashes.length} CONCLUÍDOS</span>
                <div>
                    {responses.map(response => <img alt="Icone" className="icon" src={getIcon(response)} />)}
                </div>
            </Footer>
        </Screen>
    );
}
