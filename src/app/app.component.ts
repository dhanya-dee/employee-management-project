import { Component } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [AppModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employee-management';

  constructor() {}


}