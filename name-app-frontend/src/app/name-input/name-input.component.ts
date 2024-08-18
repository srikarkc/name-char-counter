import { Component } from '@angular/core';
import { NameService } from '../name.service';

@Component({
  selector: 'app-name-input',
  templateUrl: './name-input.component.html',
  styleUrls: ['./name-input.component.css']
})
export class NameInputComponent {

  name: string = '';
  message: string = '';

  constructor(private nameService: NameService) { }

  onSubmit() {
    this.nameService.greetUser(this.name).subscribe(response => {
      this.message = response;
    });
  }
}
