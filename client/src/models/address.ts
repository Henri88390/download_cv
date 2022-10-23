import { Position } from "models";

export interface Address {
  streetNumber: number;
  streetName: string;
  postCode: string;
  city: string;
  country: string;
  position: Position;
}
