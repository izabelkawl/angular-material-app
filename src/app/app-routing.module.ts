import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './shared/components/filter/filter.component';
import { HomeComponent } from './shared/components/home/home.component';
import { LoginComponent } from './shared/components/login/login.component';
import { RegisterComponent } from './shared/components/register/register.component';

const routes: Routes = [
	{ path: '', component: HomeComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'register', component: RegisterComponent},
	{ path: 'filter', component: FilterComponent},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule { }
