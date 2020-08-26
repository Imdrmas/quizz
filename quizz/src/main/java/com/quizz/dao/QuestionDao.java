package com.quizz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizz.model.Question;


public interface QuestionDao extends JpaRepository<Question, Long> {

}
