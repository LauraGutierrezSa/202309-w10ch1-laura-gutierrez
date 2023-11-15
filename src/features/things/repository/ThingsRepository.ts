import type { Thing } from "../../../types.js";
import things from "../data/things.js";

class ThingsRepository {
  public getThings(): Thing[] {
    return things;
  }

  public getThingsById(thingsId: number): Thing {
    const thing = things.find((thing) => thing.id === thingsId);

    if (!thing) {
      throw new Error("Id not found");
    }

    return thing;
  }
}

export default ThingsRepository;
