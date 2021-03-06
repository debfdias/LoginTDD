const { User } = require('../models');

class SessionController {
	async store (req, res)
	{
		const { email, passwordH } = req.body;

		const user = await User.findOne({ where: {email} })

		if(!user){
			return res.status(401).json({ message: 'User not found!'});
		}

		if (!(await user.checkPassword(passwordH))) {
	      return res.status(401).json({ message: "password is incorrect!" });
	    }

		return res.status(200).send();
	}
}

module.exports = new SessionController();