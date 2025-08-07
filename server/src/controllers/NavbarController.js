const navbarModels = require("../models/navbarModel");


exports.UpsertNavbar = async (req, res) => {

    try {
        const { menuItems, buttonText, buttonShow } = req.body;

        if (!menuItems) {
            return res.status(400).json({ success: false, message: "menuItems field is required" });
        }

        const menuItemsArray = menuItems.split(/\s*,\s*/);

        const filter = { key: "main" }; // Fixed identifier

        const update = {
            key: "main", // ensure this is set on creation
            menuItems: menuItemsArray,
            buttonText,
            buttonShow,
        };

        const navbar = await navbarModels.findOneAndUpdate(
            filter,
            update,
            {
                new: true,
                upsert: true,
                setDefaultsOnInsert: true,
            }
        );

        const isNew = navbar.createdAt.getTime() === navbar.updatedAt.getTime(); // createdAt === updatedAt means just created

        const messages = isNew
            ? "Navbar created successfully"
            : "Navbar updated successfully";


        return res.status(200).json({
            success: true,
            message: messages,
            output: navbar,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: "Error in upserting navbar",
            error: error.message,
        });
    }
};

// Get Latest Navbar (fineOne)
// // ✅ Get Latest Navbar (for frontend)

exports.GetLatestNavbar = async (req, res) => {
    try {
        const latestNavbar = await navbarModels.findOne().sort({ createdAt: -1 });

        if (!latestNavbar) {
            return res.send({ message: "No navbar found" });
        }

        res.status(200).json({
            success: true,
            message: "Latest Navbar fetched Successfully",
            output: latestNavbar
        });

    }

    catch (error) {
        res.status(500).send({ message: "Error fetching latest navbar", error: error.message });
    }

};




// ✅ Delete Navbar by ID

exports.DeleteNavbar = async (req, res) => {

    try {

        const navbarparamsId = req.params.navbarid;

        const deleted = await navbarModels.findByIdAndDelete(navbarparamsId);

        if (!deleted) {
            return res.status(404).json({ message: "Navbar not found" });
        }

        res.status(200).send({
            success: true,
            message: "Navbar deleted successfully"
        });

    }

    catch (error) {
        res.status(500).send({ message: "Error deleting navbar", error: error.message });
    }

};





// exports.CreateNavbar = async (req, res) => {
//     try {
//         const { menuItems, buttonText, buttonShow } = req.body;



//         if (!menuItems) {
//             return res.send({ message: "menuItems field is rquired" })
//         }

//         const convertMenuItemsIntoAnArray = menuItems.split(/\s*,\s*/); // string  Convert to an array
//         //"menuItems": "Home,About,Contact" -----> postman Request output: "menuItems": ["Home","About","Contact"],

//         const navbar = await navbarModels.create({
//             menuItems: convertMenuItemsIntoAnArray,
//             buttonText,
//             buttonShow
//         });

//         res.status(200).send({
//             success: true,
//             message: "Navbar created successfully",
//             output: navbar,
//         });

//     }

//     catch (error) {
//         console.log(error)
//         res.status(500).send({ message: "Error in Creating Navbar", error: error.message });
//     }
// };



// ✅ Get All Navbars

// No Need

// exports.GetAllNavbars = async (req, res) => {
//     try {
//         const allNavbars = await navbarModels.find().sort({ createdAt: -1 });

//         res.status(200).send({
//             success: true,
//             message: "All Navbar Fetch Successfully",
//             output: allNavbars
//         });

//     } catch (error) {
//         res.status(500).json({ message: "Error fetching navbars", error: error.message });
//     }
// };





// No Need
// ✅ Update Navbar by ID

// exports.UpdateNavbar = async (req, res) => {

//     try {
//         const { menuItems, buttonText, buttonShow } = req.body;

//         const navbarparamsId = req.params.navbarid;

//         if (!menuItems) {
//             return res.send({ message: "menuItems field is rquired" })
//         }

//         const convertMenuItemsIntoAnArray = menuItems.split(/\s*,\s*/); // string  Convert to an array
//         //"menuItems": "Home,About,Contact" -----> postman Request output: "menuItems": ["Home","About","Contact"],

//         // 1. Find the document first
//         const navbar = await navbarModels.findById(navbarparamsId);


//         // let updateNavbar = await navbarModels.findByIdAndUpdate(
//         //     navbarparamsId,
//         //     { $set: { menuItems, buttonText, buttonShow } },
//         //     { new: true, runValidators: true }
//         // );

//         // 2. Manually update fields (only update provided fields)
//         if (menuItems) navbar.menuItems = convertMenuItemsIntoAnArray;
//         if (buttonText !== undefined) navbar.buttonText = buttonText;
//         if (buttonShow !== undefined) navbar.buttonShow = buttonShow;

//         //1.  Checks if buttonText exists in the request body
//         // buttonText !== undefined verifies whether the client sent this field.
//         //main-- If the client omits buttonText in the request, it remains unchanged in the database

//         // 2. Only updates if a new value is provided
//         // If buttonText was sent (even null or ""), it updates the field.
//         // If buttonText was not sent (undefined), it skips the update.


//         const updatedNavbar = await navbar.save();

//         res.status(200).send({
//             success: true,
//             message: "Navbar updated successfully",
//             output: updatedNavbar
//         });

//     }

//     catch (error) {
//         console.error(error);
//         res.status(500).send({ message: "Error updating navbar", error: error.message });
//     }
// };




