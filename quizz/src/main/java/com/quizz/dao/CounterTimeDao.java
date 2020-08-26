package com.quizz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizz.model.CounterTime;

@Repository
public interface CounterTimeDao extends JpaRepository<CounterTime, Long> {

}
