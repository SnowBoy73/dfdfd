import {Pet} from './pet';

export class Owner
{
  ownerId: number;
  name: string;
  address: string;
  petsOwned: Pet[];
}
