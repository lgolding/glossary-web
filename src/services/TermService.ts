import TermModel from "../models/TermModel";
import ITermService from "./ITermService";

export default class TermService implements ITermService {
  getAll = async () => {
    const promise: Promise<TermModel[]> = await (
      await fetch(`/api/GetTerms`)
    ).json();
    return promise;
  };
}
