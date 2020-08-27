package com.quizz.servce;

import com.quizz.model.Level;
import com.quizz.model.Question;
import org.springframework.stereotype.Service;

@Service
public interface QuestionService {
  Question addQuestion(Question question, Level level);
}
