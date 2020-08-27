import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  counter = 0;
  score = 0;
  themeName: string;
  levelName: string;

  constructor(private dialog: MatDialog, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.counter = this.data.counter;
    this.score = this.data.score;
    this.levelName = this.data.levelName;
    this.themeName = this.data.themeName;
  }
  // tslint:disable-next-line: typedef
  dismissPanel() {
  this.dialog.closeAll();
  }
}
