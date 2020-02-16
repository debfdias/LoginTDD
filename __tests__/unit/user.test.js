const bcrypt = require('bcryptjs');
const truncate = require('../utils/truncate');
const { User } = require('../../src/models');

describe('User', () => {
	beforeEach(async () => {
		await truncate();
	})

	it('should encrypt user password', async () => {
		const user = await User.create({
			name:'Dorime',
			email:'dorime@google.com',
			passwordH:'123456'
		});

		const compareHash = await bcrypt.compare("123456", user.password);

    	expect(compareHash).toBe(true);
	})

})