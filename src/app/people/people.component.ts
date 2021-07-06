import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface IPeople {
  Id: number;
  Name: string;
  Role: string;
  Weapon: string;
  SortOrder: number;
}

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  dataSource: IPeople[] = [
    {
      Id: 1,
      Name: "John Diggle",
      Role: "Body Guard",
      Weapon: "Gun",
      SortOrder: 1
    },
    {
      Id: 2,
      Name: "Oliver Queen",
      Role: "Lead",
      Weapon: "Bow and Arrow",
      SortOrder: 2
    },
    {
      Id: 3,
      Name: "Felicity Smoak",
      Role: "Technician",
      Weapon: "Computer",
      SortOrder: 3
    },
    {
      Id: 4,
      Name: "Thea Queen",
      Role: "Support",
      Weapon: "Bow and Arrow",
      SortOrder: 4
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getPeople() : IPeople[] {
    return this.dataSource;
  }

  onDrop(event: CdkDragDrop<IPeople[]>) {
    let dbItem = this.dataSource.find(d => d.Id = event.item.data.Id);
    let newIndex = event.currentIndex + 1;
    console.log(newIndex);
    console.log(event.item.data.Id);
    this.dataSource[event.previousIndex].SortOrder = newIndex;
    console.log(this.dataSource);
    console.log("Previous Index: " + event.previousIndex + " Current Index: " + event.currentIndex);
    moveItemInArray(this.dataSource,event.previousIndex, event.currentIndex);
  }

}
