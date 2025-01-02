function Card(props) {

    const colors = {
        "conhecimento": "hsla(46, 100%, 37%, 0.5)",
        "energia": "hsla(276, 100%, 49%, 0.5)",
        "morte": "hsla(0, 0%, 0%, 0.5)",
        "sangue": "hsla(358, 79%, 38%, 0.5)",
        "medo": "hsla(60, 8%, 95%, 0.5)"
    }
    const elemento = props.data.elemento.toLowerCase()

    // console.log()

    return(
        <div className="card" style={{backgroundColor: colors[elemento] ? colors[elemento] : "hsla(0, 0.00%, 50%, 0.50)"}}>
            <img src={require(`../assets/${props.data.imagens}`).default.src} />
            <div>
                <h2>{props.data.nome}</h2>
                <p>{props.data.elemento} {props.data.circulo}</p>
            </div>
        </div>
    );
}

export default Card;