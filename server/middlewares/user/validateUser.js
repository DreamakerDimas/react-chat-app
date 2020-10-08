const userSchema = require('../validationSchemas/userSchema');

const validateUser = async (req, res, next) => {
  try {
    const isValid = await userSchema.isValid(req.body);
    if (isValid) {
      return next();
    }
    return res.status(401).json({ message: 'Invalid user data' });
  } catch (e) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = validateUser;
