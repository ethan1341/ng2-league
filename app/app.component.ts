import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
@Component({
    selector: 'my-app',
    templateUrl:'app/html/home.html',
    directives:[LoginComponent]
})
export class AppComponent { }
