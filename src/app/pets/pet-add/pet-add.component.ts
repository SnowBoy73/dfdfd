import { Component, OnInit } from '@angular/core';
import {PetService} from '../../shared/services/pet.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Route, Router} from '@angular/router';
import {subscribeOn} from 'rxjs/operators';

@Component({
  selector: 'app-pet-add',
  templateUrl: './pet-add.component.html',
  styleUrls: ['./pet-add.component.scss']
})
export class PetAddComponent implements OnInit {

  petForm = new FormGroup({
    name: new FormControl(''),
    type: new FormControl(''),
    colour: new FormControl(''),
    price: new FormControl('')
  });

  constructor(private petService: PetService,
              private router: Router) { }

  ngOnInit() {}

  savePet() {
    const pet = this.petForm.value;
    this.petService.addPet(pet)
      .subscribe(() => {  // could have been '(pet)'
        this.petForm.reset();
        this.router.navigateByUrl('/pets');
      });

  }

}
