import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Level} from "../../model/Level";
import {LevelService} from "../../service/level.service";

@Component({
  selector: 'app-add-level',
  templateUrl: './add-level.component.html',
  styleUrls: ['./add-level.component.css']
})
export class AddLevelComponent implements OnInit {
  level: Level = {} as Level;

  constructor(public dialogRef: MatDialogRef<AddLevelComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any, private levelService: LevelService) { }

  ngOnInit(): void {

  }

  addLevel() {
  this.levelService.addLevel(this.level, this.data.id).subscribe(level => {
    this.level = level;
    window.location.reload();
  });
  }
}
