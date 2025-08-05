const express = require("express")

const navbarController = require("../controllers/NavbarController");




const router = express.Router();


router.post("/create-navbar", navbarController.CreateNavbar);
router.get("/get-all-navbar", navbarController.GetAllNavbars);
router.get("/get-latest-navbar", navbarController.GetLatestNavbar);
router.put("/update-navbar/:navbarid", navbarController.UpdateNavbar);
router.delete("/delete-navbar/:navbarid", navbarController.DeleteNavbar);
// router.get("/logout", userControllers.LogOut)





module.exports = router;