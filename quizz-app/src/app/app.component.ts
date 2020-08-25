import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AddQuestionComponent } from './add-question/add-question.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dialogRef: any;

  constructor(private dialog: MatDialog ) {}

    // tslint:disable-next-line: typedef
    public openRegister() {
    this.dialogRef = this.dialog.open(AddQuestionComponent, {
      width: '300px',
    });
  }
}
