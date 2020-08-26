package com.quizz.impl;

import org.springframework.stereotype.Service;

import com.quizz.model.Level;

@Service
public interface LevelService {
	
	public Level addLevel(Level level, Long idTheme);

}
