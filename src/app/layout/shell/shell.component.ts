import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
@Component({selector:'app-shell',standalone:true,imports:[HeaderComponent,FooterComponent],templateUrl:'./shell.component.html',styleUrl:'./shell.component.scss'})
export class ShellComponent {}
