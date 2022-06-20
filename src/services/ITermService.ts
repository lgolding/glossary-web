import TermModel from "../models/TermModel";

export default interface ITermService {
  getAll: () => Promise<TermModel[]>;
}
