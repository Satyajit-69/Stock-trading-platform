const router = require("express").Router();
const { register, login } = require("./auth.controller");
const passport = require("passport");

router.post("/register", register);
router.post("/login", login);

/* GOOGLE OAUTH */
router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const generateToken = require("../utils/generateToken");
    const token = generateToken(req.user._id);
    res.redirect(`${process.env.CLIENT_URL}/oauth-success?token=${token}`);
  }
);

module.exports = router;
