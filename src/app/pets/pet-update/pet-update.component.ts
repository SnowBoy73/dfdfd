import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-pet-update',
  templateUrl: './pet-update.component.html',
  styleUrls: ['./pet-update.component.scss']
})

export class PetUpdateComponent implements OnInit {
  id: number;
  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    colour: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private route: ActivatedRoute,
              private petService: PetService,
              private router: Router) { }

  ngOnInit(): any {
    this.id = +this.route.snapshot.paramMap.get('petId');

    this.petService.getPetById(this.id)
      .subscribe(petFromRestAPI => {
        this.petForm.patchValue({
          name: petFromRestAPI.name,
          type: petFromRestAPI.type,
          colour: petFromRestAPI.colour,
          price: petFromRestAPI.price
        });
      });
  }

  savePet() {
    const pet = this.petForm.value;
    pet.petId = this.id;
    this.petService.updatePet(pet)
      .subscribe(petUpdated => {
        this.router.navigateByUrl('/pets');
      });
  }

}
