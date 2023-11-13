import "./card.css"
import { useState } from "react"

type Props = {
    title: string;
    subtitle: string;
    description: string;
}

const Card = ({ title, subtitle, description }: Props) => {
    const [display, setDisplay] = useState(false)

    return (
        <div className="card">
            <h1 className="title">{title}</h1>
            <h2 className="subtitle">{subtitle}</h2>
            {display && <p className="p">{description}</p>}
            <span className="link" onClick={() => setDisplay(!display)}>{display ? "ver menos" : "ver más"}</span>
        </div>
    )
}

export default Card;
