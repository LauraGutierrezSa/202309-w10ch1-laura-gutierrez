import { Router } from "express";
import type { ThingOptinalId } from "../../../types.js";
import things from "../data/things.js";
import ThingsController from "../controller/ThingsController.js";

const thingsRouter = Router();
const thingsController = new ThingsController();

thingsRouter.get("/", thingsController.getThings);

thingsRouter.get("/:idThing", thingsController.getThingsById);

thingsRouter.delete("/:idThing", (req, res) => {
  const id = +req.params.idThing;

  const thingIndex = things.findIndex((thing) => thing.id === id);

  if (thingIndex === -1) {
    res.status(404).json({});
    return;
  }

  things.splice(thingIndex, 1);

  res.status(200).json({});
});

thingsRouter.post("/", (req, res) => {
  try {
    const { thing } = req.body as ThingOptinalId;
    const newThing = { id: things.length, thing };
    things.push(newThing);
    res.status(200).json(newThing);
  } catch (error) {
    res
      .status(404)
      .json({ error: "there is no body", body: (error as Error).message });
  }
});

thingsRouter.post("/", (req, res) => {
  const { thing } = req.body as ThingOptinalId;

  if (!thing) {
    res.status(404).json({});
    return;
  }

  const newThing = { id: things.length, thing };
  things.push(newThing);
  res.status(200).json(newThing);
});

thingsRouter.put("/", (req, res) => {
  const { id, thing } = req.body as ThingOptinalId;

  const thingIndex = things.findIndex((thing) => thing.id === Number(id));

  if (thingIndex === -1) {
    res.status(404).json({});
    return;
  }

  if (!thing) {
    res.status(404).json({});
    return;
  }

  things[thingIndex].thing = thing;
  res.status(200).json(things[thingIndex]);
});

export default thingsRouter;
