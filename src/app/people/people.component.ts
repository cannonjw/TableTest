import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

export interface IPeople {
  Id: number;
  Name: string;
  Role: string;
  Weapon: string;
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
      Weapon: "Gun"
    },
    {
      Id: 2,
      Name: "Oliver Queen",
      Role: "Lead",
      Weapon: "Bow and Arrow"
    },
    {
      Id: 3,
      Name: "Felicity Smoak",
      Role: "Technician",
      Weapon: "Computer"
    },
    {
      Id: 4,
      Name: "Thea Queen",
      Role: "Support",
      Weapon: "Bow and Arrow"
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getPeople() : IPeople[] {
    return this.dataSource;
  }

  onDrop(event: CdkDragDrop<IPeople>) {
    console.log(event.container.data);
    console.log("Previous Index: " + event.previousIndex + " Current Index: " + event.currentIndex);
    moveItemInArray(this.dataSource,event.previousIndex, event.currentIndex);
  }

}
