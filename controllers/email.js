const router = require("express").Router();
const Email = require("../models/Email");

router
  .get("", async (request, response) => {
    const addresses = await Email.find({});

    return response.status(200).json(addresses).end();
  })
  .post("", async (request, response) => {
    const address = request.body;
    const newAddress = new Email(address);

    try {
      await newAddress.save();
    } catch (e) {
      return response.status(400).json({ error: e.message });
    }
    return response.status(201).json({ message: "added successfully" });
  });

module.exports = router;
