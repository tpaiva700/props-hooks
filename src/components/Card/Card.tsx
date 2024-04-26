import './Card.css'

//Interface - precisa montar uma estrutura de Dados
interface CardProps {
    titulo : string;
    descricao : string;
}


//Título e descrição
function Card({titulo, descricao} : CardProps) {
    return (
        <div className="card">
            <h1>{ titulo }</h1>
            <p>{ descricao }</p>
        </div>
  
    )
}

export default Card