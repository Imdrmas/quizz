package com.quizz.servce;

import com.quizz.model.Theme;
import org.springframework.stereotype.Service;

import com.quizz.model.Level;

@Service
public interface LevelService {
	
	Level addLevel(Level level, Theme theme);

}
