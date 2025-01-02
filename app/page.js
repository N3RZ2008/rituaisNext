import Card from "../components/card"
import { promises as fs } from "fs" 

export default async function Page() {
    // const cards = [
    //     {
    //         nome: "Ritual 1",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    //     {
    //         nome: "Ritual 2",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    //     {
    //         nome: "Ritual 3",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    //     {
    //         nome: "Ritual 4",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    //     {
    //         nome: "Ritual 5",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    //     {
    //         nome: "Ritual 6",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    //     {
    //         nome: "Ritual 7",
    //         elemento: "Medo",
    //         circulo: 1,
    //         img: "https://blog.jamboeditora.com.br/wp-content/uploads/2023/08/optranscender2.jpg"
    //     },
    // ]

    const data = await fs.readFile(process.cwd() + "/json/rituais.json", "utf-8")
    const cards = await JSON.parse(data);    

    const renderedCards = cards.map(card =>
        <Card data={card}/>
    )

    // console.log()

    return (
        <div className="cardContainer">
            {renderedCards}
        </div>
    );
}