import { Component, OnInit } from '@angular/core';
import {Theme} from "../model/Theme";
import {ThemeService} from "../service/theme.service";

@Component({
  selector: 'app-add-theme',
  templateUrl: './add-theme.component.html',
  styleUrls: ['./add-theme.component.css']
})
export class AddThemeComponent implements OnInit {
  theme: Theme = {} as Theme;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addTheme() {
    this.themeService.addTheme(this.theme).subscribe(theme => {
      this.theme = theme;
      window.location.reload();
    });
  }
}
