import TermModel from "../models/TermModel";
import ITermService from "./ITermService";

export default class TermService implements ITermService {
  getAll = async () => {
    const promise: Promise<TermModel[]> = await (
      await fetch(`http://localhost:7071/api/GetTerms`)
    ).json();
    return promise;
  };
}
