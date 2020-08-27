import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddQuestionComponent } from '../add-question/add-question.component';
import {HistoryService} from "../service/history.service";
import {History} from "../model/History";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {
  userUsername: string;
  dialogRef: any;
  histories: History[];

  constructor(private dialog: MatDialog, private historyService: HistoryService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userUsername = this.route.snapshot.params.userUsername;
    this.historyService.getHistories().subscribe(data => {
      this.histories = data;
    })
  }

}
