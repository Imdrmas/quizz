import { AddThemeComponent } from './../add-theme/add-theme.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.css']
})
export class QuestionContentComponent implements OnInit {

  dialogRef: any;

  constructor(private dialog: MatDialog ) {}

  ngOnInit(): void {
  }
  // tslint:disable-next-line: typedef
  public openRegister() {
    this.dialogRef = this.dialog.open(RegisterComponent, {
      width: '420px'
    });
  }
}
