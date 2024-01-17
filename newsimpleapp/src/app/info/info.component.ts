import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  @Input() name!: string; // get name from parent shopComponent
  @Output() resetClicked = new EventEmitter<void>(); // tell the parent shopComponent that it needs to do this
  quantity = 0;
  products: string[] = [];
  selectedProduct = "Star Wars";

  constructor() { }

  // Initialize component properties when the component is created
  ngOnInit(): void {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
  }

  newInfo() {
    this.quantity = 0;
    this.products = ["Star Wars", "The Empire Strikes Back", "Return of the Jedi"];
    this.selectedProduct = "Star Wars";
    this.resetClicked.emit(); // emit the event to the parent
    console.log("In newInfo() and resetting info");
  }

  onSubmit() {
    console.log(`In onSubmit() with quantity of ${this.quantity} and Movie selected is ${this.selectedProduct}`);
  }

}
