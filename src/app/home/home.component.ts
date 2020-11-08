import { Component, OnInit } from '@angular/core';
import { LogIn } from '../shared/models/logIn';
import { LoginService } from '../shared/services/login.service';
import { AuthenticationService } from '../shared/services/authentication.service';
import {PetService} from '../shared/services/pet.service';
import {Pet} from '../shared/models/pet';

@Component({
  templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
  pets: Pet[] = [];
  username: string;
  errormessage = '';

  constructor(private petService: PetService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit(): any {
    // get users from secure api end point
    this.petService.getPets()
      .subscribe(
        p => {
          this.pets = p;
        },
        error => {
          this.errormessage = error.message;
        });
  }

}
