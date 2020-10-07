function criarTarefa {
    const inputTarefa = document.getElementById("tarefa");
    const inputDiaSemana = document.getElementById("dias-semana");
    //console.log(inputTarefa.value);
    //console.log(inputTarefa.value);
    if (inputTarefa.value !== "") {
        inputTarefa.innerHTML += `<li> ${inputTarefa.value}</li>`;
        inputDiaSemana.innerHTML += ``
    } else {
        alert("Digite um produto válido!");
    }

}

