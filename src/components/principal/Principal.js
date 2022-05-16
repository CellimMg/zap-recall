import Screen from "../common/Screen";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "./Principal.css"

export default function Principal() {
    return (
        <Screen>
            <img width="136px" height="161px" src={logo} alt="Logo" />
            <span>ZapRecall</span>
            <Link to="/cards"><button>Iniciar Recall!</button></Link>
        </Screen>
    );
}