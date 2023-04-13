import Football from "../models/football.js";

export const getFootballs = async (req, res) => {
  try {
    const footballs = await Football.find();
    res.json(footballs);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getFootball = async (req, res) => {
  try {
    const { id } = req.params;

    const ootball = await Football.findById(id);
    res.json(football);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const createFootball = async (req, res) => {
  try {
    const football = new Football(req.body);
    await football.save();
    res.status(201).json(Football);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const updateFootball = async (req, res) => {
  const { id } = req.params;
  const Football = await Football.findByIdAndUpdate(id, req.body);
  res.status(200).json(Football);
};

export const deleteFootball = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Football.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Football Deleted!");
    }

    throw new Error("Football not found");
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};
