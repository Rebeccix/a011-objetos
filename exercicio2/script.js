const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// a
console.log("O nome do(a) primeiro(a) ator/atriz é " + filme.elenco[0])
// b
console.log("O nome do(a) ultimo(a) ator/atriz é " + filme.elenco[filme.elenco.length - 1 ])
// c
console.log("O nome de todas as transmições de hoje são " + filme.transmissoesHoje[0].canal + ', ' + filme.transmissoesHoje[1].canal + ' e ' + filme.transmissoesHoje[2].canal)
// d
console.log("O horário de transmissão do filme no Canal Brasil é " + filme.transmissoesHoje[1].horario) 