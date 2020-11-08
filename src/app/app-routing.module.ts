import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PetListComponent} from './pets/pet-list/pet-list.component';
import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {PetDetailsComponent} from './pets/pet-details/pet-details.component';
import {PetAddComponent} from './pets/pet-add/pet-add.component';
import {PetUpdateComponent} from './pets/pet-update/pet-update.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'pets/:petId', component: PetDetailsComponent },
  { path: 'pets', component: PetListComponent },
  { path: 'pet-add', component: PetAddComponent  },
  { path: 'pet-update/:petId', component: PetUpdateComponent  },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
