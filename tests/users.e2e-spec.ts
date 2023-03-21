import { App } from '../src/app';
import { boot } from '../src/main';
import request from 'supertest';

let application: App;

beforeAll(async () => {
	const { app } = await boot;
	application = app;
});

describe('Users e2e', () => {
	it('Register - error', async () => {
		const res = await request(application.app).post('/users/register').send({
			email: 'a@a.com',
			password: '1234',
		});
		expect(res.statusCode).toBe(422);
	});
	it('Login - success', async () => {
		const res = await request(application.app).post('/users/login').send({
			email: 'a@a.com',
			password: '1234',
		});
		expect(res.body.jwt).not.toBeUndefined();
	});
});

afterAll(() => {
	application.close();
});
