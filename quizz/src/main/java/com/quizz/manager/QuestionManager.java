package com.quizz.manager;

import com.quizz.dto.QuestionDto;

import java.util.List;

public interface QuestionManager {

     QuestionDto addQuestion(QuestionDto questionDto, Long idLevel);

     List<QuestionDto> getQuestions(Long idLevel);
}
