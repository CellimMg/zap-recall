import "./Button.css";

export default function Button({ onTap, color, title }) {
    return (
        <div className="button" onClick={onTap} style={{ backgroundColor: color }}>
            <span>{title}</span>
        </div>
    );
}