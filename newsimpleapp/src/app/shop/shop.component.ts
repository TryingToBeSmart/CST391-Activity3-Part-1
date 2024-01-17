import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {
  question = "What's your name?";
  answer = "unknown";

  appForm = new FormGroup({
    answer: new FormControl(''),
  });

  onSubmit(data: Partial<{ answer: string | null }>) {
    this.answer = data.answer!;
    console.log("Your name is " + this.answer);
  }
  // This method resets the answer property to 'unknown' and clears the form control
  resetAnswer() {
    this.answer = 'unknown';
    this.appForm.get('answer')?.setValue(''); // Clear the form control
  }
}
