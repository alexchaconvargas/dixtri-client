//Devuelve un JSON de un candidato nuevo
export function userGenerator(state) {
	return {'key' : state.get('candidates').size +1 ,'name': getName(), 'apellido1': getSurname(), 'email' : getEmail()};
}

const names = ['Carlos', 'María', 'Pedro', 'Álvaro', 'Alberto', 'Laia', 'Miriam', 'Sergi', 'Edgar', 'Toni', 'Benito'];
const surnames = ['Tablas', 'Padrao', 'López', 'Carmona', 'Giménez', 'Tort', 'Mestres', 'Balagueró', 'Nieto', 'Seco', 'Casas'];
const emails = ['asdfa@homail.com', 'cascara@hotmail.com', 'ejemplo@yahoo.es', 'algo@gmail.com'];

function getName(){
	return names[Math.floor(Math.random()*names.length)];
}

function getSurname(){
	return surnames[Math.floor(Math.random()*surnames.length)];
}

function getEmail(){
	return emails[Math.floor(Math.random()*emails.length)];
}