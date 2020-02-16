const request = require('supertest');
const app = require('../../src/app');
const { User } = require('../../src/models/');
const truncate = require('../utils/truncate');

/*
describe('Authentication', () => {
	it('should sum two numbers', () => {
		const x = 2;
		const y = 4;

		const sum = x + y;

		expect(sum).toBe(6);

	});
});

describe('Authentication', () => {
	it('should sum two numbers', async () => {
		const user = await User.create({
			name: 'Dory',
			email:'dory@yahoo.com',
			password:'123132132'
		});

		console.log(user);

		expect(user.email).toBe('dory@yahoo.com');
	});
});*/

describe('Authentication', () => {
	beforeEach(async () => {
		await truncate();
	})

	

	it('should authenticate with valid credentials', async () => {
		const user = await User.create({
			name: 'Dorime',
			email:'dorime@google.com',
			passwordH:'123'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				passwordH: '123'
			});


		expect(response.status).toBe(200);
	});

	it('should not authenticate with invalid credentials', async () => {
		const user = await User.create({
			name: 'Dorime',
			email:'dorime@google.com',
			passwordH:'123'
		});

		const response = await request(app)
			.post('/sessions')
			.send({
				email: user.email,
				passwordH: '123456'
			});


		expect(response.status).toBe(401);

	});
});