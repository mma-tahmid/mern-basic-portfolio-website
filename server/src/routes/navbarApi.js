const express = require("express")

const navbarController = require("../controllers/NavbarController");




const router = express.Router();


router.post("/create-navbar", navbarController.CreateNavbar);
router.get("/all-navItem", navbarController.GetAllNavbars);
router.put("/update-navbar/:navbarid", navbarController.UpdateNavbar);
// router.get("/logout", userControllers.LogOut)





module.exports = router;