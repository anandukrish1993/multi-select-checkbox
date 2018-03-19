import { Component } from '@angular/core';
import { PlayerInputModel } from './playerInputModel';
import { FieldingPosition } from './fieldingPosition';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tableHeaders: object[] = [
    { header: "Name" }, { header: "Nation" }, { header: "Franchise" }, { header: "Field Position" }
  ]
  tableData: object[] = [];
  inputModels: PlayerInputModel = {
    name: '', nationality: '', Franchise: '', position: ''
  }
  fieldPositions: FieldingPosition[] = [
    { name: "Wicket Keeper", key: 1, checked: false }, { name: "First Slip", key: 2, checked: false }, { name: "Second Slip", key: 3, checked: false },
    { name: "Short Third Man", key: 4, checked: false }, { name: "Backward Point", key: 5, checked: false }, { name: "Cover", key: 6, checked: false },
    { name: "Extra Cover", key: 7, checked: false }, { name: "Mid Off", key: 8, checked: false }, { name: "Mid On", key: 9, checked: false },
    { name: "Mid Wicket", key: 10, checked: false }, { name: "Square Leg", key: 11, checked: false }, { name: "Fine Leg", key: 12, checked: false }
  ]
  submitClick(): void {
    if (this.inputModels.name) {
      this.tableData.push(this.inputModels);
      this.inputModels = { name: '', nationality: '', Franchise: '', position: '' };
    }
  }
  cancelClick(): void {
    this.inputModels = { name: '', nationality: '', Franchise: '', position: '' };
  }
}
