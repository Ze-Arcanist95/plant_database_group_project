const User = require('../models/User');

const handleLogout = async (req, res) => {
    const cookies = req.cookies; // Get cookies from request
    if (!cookies?.jwt) return res.sendStatus(204); // No content
    const refreshToken = cookies.jwt; // Get refresh token from cookie
    
    const foundUser = await User.findOne({ refreshToken }).exec();
    if (!foundUser) {
        res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'none' });
        return res.sendStatus(204);
    }

    // Clear refresh token from database
    foundUser.refreshToken = foundUser.refreshToken.filter(token => token !== refreshToken);
    const result = await foundUser.save();
    console.log(result);
    
    // Clear refresh token from cookie
    res.clearCookie('jwt', { httpOnly: true, secure: true, sameSite: 'none' });
    res.sendStatus(204);
};

module.exports = { handleLogout };