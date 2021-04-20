const io = require('socket.io-client');
const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio-client');

const socket = io('http://localhost:3031');
const client = feathers();

client.configure(socketio(socket));

const populationService = client.service('v1/population');

populationService.on('created', popuplation => console.log('Created a population', population));

const populations = [
	{ uf: 'SP', population: 45538936 },
	{ uf: 'RJ', population: 17159960 },
	{ uf: 'PE', population: 9496294 },
	{ uf: 'BA', population: 14812617 },
];

for (let i = 0; i < populations.length; i += 1) {
	populationService
		.create(populations[i])
		.then(res => console.log(res));
}
