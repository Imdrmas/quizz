import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionComponent } from '../add-question/add-question.component';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  dialogRef: any;

  constructor(private dialog: MatDialog ) {}

    // tslint:disable-next-line: typedef
    public openRegister() {
    this.dialogRef = this.dialog.open(AddQuestionComponent, {
      width: '500px',
      panelClass: 'addQuestion'
    });
  }
  ngOnInit(): void {
  }
}
