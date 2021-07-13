import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/components/home/home.component';

// Material all imports
import { MaterialModules } from './material-modules';
import { LoginModule } from './shared/components/login/login.module';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './shared/components/register/register.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
  RegisterComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		MaterialModules,
		LoginModule,
		CommonModule,
	],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule { }
