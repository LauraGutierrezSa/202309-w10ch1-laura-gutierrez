import type { Request, Response } from "express";
import things from "../data/things.js";
import ThingsRepository from "../repository/ThingsRepository.js";

const thingsRepository = new ThingsRepository();

class ThingsController {
  public getThings(_req: Request, res: Response) {
    res.status(200).json({ things });
  }

  public getThingsById(req: Request, res: Response) {
    const id = +req.params.idThing;
    const thing = thingsRepository.getThingsById(id);
    try {
      res.status(200).json(thing);
    } catch (error) {
      res.status(404).json({});
    }
  }
}

export default ThingsController;
