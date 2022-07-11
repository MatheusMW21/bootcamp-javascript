function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Matheus',
	idade: 18,
};

const pessoa2 = {
	nome: 'Bianca',
	idade: 18,
};


console.log(calculaIdade.apply(pessoa2, [2]));