import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  dialogRef: any;

  constructor(private dialog: MatDialog ) {}

    // tslint:disable-next-line: typedef
    public openResult() {
    this.dialogRef = this.dialog.open(ResultComponent, {
      width: '420px',

    });
  }
  ngOnInit(): void {
  }

}
