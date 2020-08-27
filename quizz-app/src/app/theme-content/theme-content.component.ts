import { Component, OnInit } from '@angular/core';
import {Level} from "../model/Level";
import {LevelService} from "../service/level.service";
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.css']
})
export class ThemeContentComponent implements OnInit {
  level: any;
  levels: Level[];
  id: number;
  idLevel: number;
  userName: string;

  constructor(private levelService: LevelService, private route: ActivatedRoute, private userService: UserService) {
    this.route.params.subscribe(
      params => {
        this.userName = userService.getUsername();
        this.id = this.route.snapshot.params.id;
        this.levelService.getLevels(this.id).subscribe(data => {
          this.levels = data;
        });
      }
    )
  }

  ngOnInit(): void {
  }

  setLevel(e) {
    this.idLevel = e;
    console.log(this.idLevel)
  }
}
