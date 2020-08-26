package com.quizz.servce;

import org.springframework.stereotype.Service;

import com.quizz.model.Theme;

@Service
public interface ThemeService {

	public Theme addTheme(Theme theme);
}
