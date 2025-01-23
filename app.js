//particpantes
let amigos = [];

// Adicionar amigo
function adicionarAmigo() {
    const nome = document.getElementById('amigo').value;
    if (nome !== '') {
        amigos.push(nome);
        document.getElementById('listaAmigos').innerHTML += `<li>${nome}</li>`;
        document.getElementById('amigo').value = '';
    }
}

//Embaralhar a lista
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Sortear um amigo
function sortearAmigo() {
    if (amigos.length < 1) {
        alert('Adicione pelo menos um amigo para sortear.');
        return;
    }

    const participantesEmbaralhados = embaralhar(amigos.slice());
    const amigoSorteado = participantesEmbaralhados[0];
    document.getElementById('resultado').innerHTML = `<li>O amigo sorteado é: ${amigoSorteado}</li>`;
}
