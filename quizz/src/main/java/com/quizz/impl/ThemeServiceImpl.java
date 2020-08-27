package com.quizz.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.quizz.dao.ThemeDao;
import com.quizz.model.Theme;
import com.quizz.servce.ThemeService;

import java.util.List;

@Component
@Transactional
public class ThemeServiceImpl implements ThemeService {
	
	@Autowired
	private ThemeDao themeDao;

	@Override
	public Theme addTheme(Theme theme) {
		return themeDao.save(theme);
	}

}
