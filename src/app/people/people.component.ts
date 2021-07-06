import { Component, OnInit } from '@angular/core';

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

  private dataSource: IPeople[] = [
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
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

  getPeople() : IPeople[] {
    return this.dataSource;
  }

}
