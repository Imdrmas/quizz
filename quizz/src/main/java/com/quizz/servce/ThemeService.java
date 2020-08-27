package com.quizz.servce;

import org.springframework.stereotype.Service;

import com.quizz.model.Theme;

import java.util.List;

@Service
public interface ThemeService {

    Theme addTheme(Theme theme);


}
