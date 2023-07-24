import { IgtStatistics } from "incremental-game-template";
import { useStatisticsStore } from "./statistics-store";

export class IgtStatisticsStore extends IgtStatistics {
  public get list() {
    return useStatisticsStore().list;
  }

  public set list(v) {
    useStatisticsStore().list = v;
  }
}
