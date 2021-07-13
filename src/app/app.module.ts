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

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
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
