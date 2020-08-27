import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from '@angular/material/dialog';
import {Response} from "../model/Response";
import {QuestionService} from "../service/question.service";
import {ResponseService} from "../service/response.service";
import {Question} from "../model/Question";

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
 // response: Response = {} as Response;
  question: Question = {} as Question;
  correct: any = {};

  constructor(private dialog: MatDialog, private questionService: QuestionService,
              private responseService: ResponseService, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
  }

cancel() {
  this.dialog.closeAll();
}

  setResponse() {
   this.question.correct = this.correct;
  }

  addQuestion() {
    this.questionService.addQuestion(this.question, this.data.id).subscribe(question => {
      this.question = question;
      window.location.reload();
    })
  }
}
