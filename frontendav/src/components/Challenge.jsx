const Challenge = () => {
    let num1 = 9;
    let num2 = 11;

    function soma(num1, num2){
        return num1 + num2;
    };

    return (
        <div>
            <br></br>
            <h1>Desafio 1</h1>
            <h2>{num1} e {num2}</h2>
            <button onClick={() => console.log(soma(num1, num2))}>Somar</button>
        </div>
    );
};

export default Challenge;