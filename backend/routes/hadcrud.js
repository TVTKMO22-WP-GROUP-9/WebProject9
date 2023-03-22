const express = require("express");
const hadcrudGlobalAnnual = require("./hadcrud/hadcrud_global_annual");
const hadcrudNorthenAnnual = require("./hadcrud/hadcrud_northen_annual");
const hadcrudSouthernAnnual = require("./hadcrud/hadcrud_southern_annual");
const hadcrudGlobalMonthly = require("./hadcrud/hadcrud_global_monthly");
const hadcrudNorthenMonthly = require("./hadcrud/hadcrud_northen_monthly");
const hadcrudSouthernMonthly = require("./hadcrud/hadcrud_southern_monthly");

const router = express.Router();

router.use("/GlobalAnnual", hadcrudGlobalAnnual);
router.use("/NorthenAnnual", hadcrudNorthenAnnual);
router.use("/SouthernAnnual", hadcrudSouthernAnnual);
router.use("/GlobalMonthly", hadcrudGlobalMonthly);
router.use("/NorthenMonthly", hadcrudNorthenMonthly);
router.use("/SouthernMonthly", hadcrudSouthernMonthly);

module.exports = router;
