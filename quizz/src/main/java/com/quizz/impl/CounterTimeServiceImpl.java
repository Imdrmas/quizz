package com.quizz.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import com.quizz.dao.CounterTimeDao;
import com.quizz.model.CounterTime;
import com.quizz.servce.CounterTimeService;

@Component
@Transactional
public class CounterTimeServiceImpl implements CounterTimeService{
	
	@Autowired
	private CounterTimeDao couterTimeDao;

	@Override
	public CounterTime addCounterTime(CounterTime counterTime) {
		return couterTimeDao.save(counterTime);
	}

}
