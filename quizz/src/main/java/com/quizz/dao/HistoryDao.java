package com.quizz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizz.model.History;

@Repository
public interface HistoryDao extends JpaRepository<History, Long> {
  History findHistoryBySore(int score);

  History findHistoryByUsername(String username);
}
