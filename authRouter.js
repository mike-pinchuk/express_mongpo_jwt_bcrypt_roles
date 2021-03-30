const Router = require("express");
const controller = require("./authController");
const { check } = require("express-validator");
const router = new Router();
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleware = require("./middleware/roleMiddleware");

router.post(
  "/registration",
  [
    check("username", "User name cannot be empty").notEmpty(),
    check("password", "Password cannot be empty and shoter than 4 symbols")
      .notEmpty()
      .isLength({ min: 4 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get("/users", roleMiddleware(["ADMIN"]), controller.getUser);

module.exports = router;
