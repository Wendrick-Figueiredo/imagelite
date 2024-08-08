'use client'

interface PrimeiroComponentPros {
   mensagem: string; 
   mensagemDoBotao: string;
}

export const PrimeiroComponent: React.FC<PrimeiroComponentPros> = (props: PrimeiroComponentPros) => {

    function handleClick(){
        console.log(props.mensagemDoBotao)
    }

    return (
        <div>
            { props.mensagem }

            <button onClick={handleClick} >Clique aqui</button>
        </div>
    )
}

export const ArrowFunction = () => {
    return (
        <h2>Arrow Function</h2>
    )
}