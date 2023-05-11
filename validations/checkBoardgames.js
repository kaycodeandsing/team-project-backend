const checkName = (req, res, next) => {
    console.log("checking name...");
  };
  

  const checkBoolean = (req, res, next) => {
    const { two_more } = req.body;
    if (
      two_more == "true" ||
      two_more == "false" ||
      two_more == undefined
    ) {
      next();
    } else {
      res.status(400).json({ error: "two_more must be a boolean value" });
    }
  };
  module.exports = { checkBoolean, checkName };