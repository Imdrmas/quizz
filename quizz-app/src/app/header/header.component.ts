import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionComponent } from '../add-question/add-question.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  dialogRef: any;

  constructor(private dialog: MatDialog ) {}

    // tslint:disable-next-line: typedef
    public openRegister() {
    this.dialogRef = this.dialog.open(RegisterComponent, {
      width: '420px'
    });
  }
  ngOnInit(): void {
  }

}
