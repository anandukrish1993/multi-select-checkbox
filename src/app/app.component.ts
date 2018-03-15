import { Component } from '@angular/core';

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
  inputModels: object = {
    name: '', nationality: '', Franchise: '', position: ''
  }
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
