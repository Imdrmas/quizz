import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {Question} from "../model/Question";
import {Response} from "../model/Response";
import {QuestionService} from "../service/question.service";
import {ActivatedRoute} from "@angular/router";
import {ResponseService} from "../service/response.service";
import {timer} from "rxjs";
import {ResultComponent} from "../result/result.component";
import {LevelService} from "../service/level.service";
import {ThemeService} from "../service/theme.service";
import {HistoryService} from "../service/history.service";
import {History} from "../model/History";
import {UserService} from "../service/user.service";
const counterSecond = timer(0, 1000);

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  dialogRef: any;
  questions: Question[];
  history: History = {} as History;
  histories: History[];
  idLevel: number;
  level: any;
  counter = 0;
  score = 0;
  btnDisabled = true;
  username: string;

  constructor(private dialog: MatDialog, private questionService: QuestionService, private route: ActivatedRoute,
              private levelService: LevelService, private historyService: HistoryService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.username = this.userService.getUsername();
    this.idLevel = this.route.snapshot.params.idLevel;
    this.questionService.getQuestions(this.idLevel).subscribe(data => {
      this.questions = data;
      for (var i = this.questions.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this.questions[i];
        this.questions[i] = this.questions[j];
        this.questions[j] = temp;
      }
    })
    this.levelService.getLevel(this.idLevel).subscribe(level => {
      this.level = level;
    });
    counterSecond.subscribe(() => {
      this.counter += 1;
    });
  }


  public openResult(themeName, levelName) {
    const counter = this.counter;
    const score = this.score;
    const username = this.username;
    this.history.total = this.counter;
    this.history.themeName = themeName;
    this.history.levelName = levelName;
    this.history.username = username;
    this.history.sore = this.score;
   console.log(score);
    this.dialogRef = this.dialog.open(ResultComponent, {
      width: '420px',
      data: {score, counter, themeName, levelName}
    });
    this.historyService.findHistoryByUsername(username).subscribe(data => {
      this.history = data;
        if (score > this.history.sore) {
          this.history.sore = score;
          this.historyService.addHistory(this.history).subscribe(addHistory => {
            this.history = addHistory;
          })

        } else {
          this.historyService.editHistory(this.history, username).subscribe((editHistory) => {
            this.history = editHistory;
          });
        }
    })

    counterSecond.subscribe(() => {
      this.counter = +'';
    });
  }

  setResponses(e) {
    this.questions.forEach((q, index) => {
      if (e.source.value===q.correct) {
        this.score++;
      }
    })
    this.btnDisabled = false;
  }
}
