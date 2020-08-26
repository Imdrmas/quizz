package com.quizz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizz.model.Score;

@Repository
public interface ScoreDao extends JpaRepository<Score, Long> {

}
