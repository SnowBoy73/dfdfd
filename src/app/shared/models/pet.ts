import {PetType} from './petType';
import {Owner} from './owner';

export class Pet {
  petId: number;
  name: string;
  type: PetType;
  colour: string;
  birthDate: Date;
  price: number;
  soldDate: Date;
  petOwner: Owner;
}

