import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

// Material all imports
import { MaterialModules } from '../../../material-modules'

@NgModule({
	declarations: [
		LoginComponent,
	],
	imports: [
		MaterialModules,
	],
})
export class LoginModule { }
