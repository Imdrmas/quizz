package com.quizz.servce;

import org.springframework.stereotype.Service;

import com.quizz.model.CounterTime;

@Service
public interface CounterTimeService {

	public CounterTime addCounterTime(CounterTime counterTime);
}
