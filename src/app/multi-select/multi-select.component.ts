import { Component, OnInit, Input } from '@angular/core';
import { FieldingPosition } from '../fieldingPosition';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.css']
})
export class MultiSelectComponent implements OnInit {

  @Input() positionList: FieldingPosition[];
  @Input() change: Function;
  model: number[];
  showList: boolean = false;
  selectedPositions: FieldingPosition[] = [];

  constructor() { }
  ngOnInit() {
  }

  showPositionList(): void {
    this.showList = true;
  }
  clearClick(): void {
    for (var i = 0; i < this.positionList.length; i++) {
      this.positionList[i].checked = false;
    }
    this.selectedPositions = [];
  }
  doneClick(): void {
    this.showList = false;
    this.model = [];
    for (var i = 0; i < this.selectedPositions.length; i++) {
      this.model.push(this.selectedPositions[i].key);
    }
    this.change(this.model);
  }
  checkPosition(index): void {
    this.positionList[index].checked = !this.positionList[index].checked;
    if (this.positionList[index].checked) {
      this.selectedPositions.push(this.positionList[index]);
    } else {
      for (var i = 0; i < this.selectedPositions.length; i++) {
        if (this.positionList[index].key === this.selectedPositions[i].key) {
          this.selectedPositions.splice(i, 1);
        }
      }
    }
  }
}
