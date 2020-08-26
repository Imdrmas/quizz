import { AddThemeComponent } from './../add-theme/add-theme.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  dialogRef: any;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  public openRegister() {
    this.dialogRef = this.dialog.open(AddThemeComponent, {
      width: '420px'
    });
  }
}
