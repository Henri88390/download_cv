import { Address } from "models";

export interface Experience {
  index: number;
  logoUrl: string;
  companyName: string;
  address: Address;
  startDate: Date;
  endDate?: Date;
  jobTitle: string;
}
