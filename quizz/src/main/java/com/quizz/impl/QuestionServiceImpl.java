package com.quizz.impl;

import com.quizz.dao.LevelDao;
import com.quizz.dao.QuestionDao;
import com.quizz.model.Level;
import com.quizz.model.Question;
import com.quizz.servce.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

@Component
@Transactional
public class QuestionServiceImpl implements QuestionService {

    private QuestionDao questionDao;

    private LevelDao levelDao;

    @Autowired
    public QuestionServiceImpl(QuestionDao questionDao, LevelDao levelDao) {
        this.questionDao = questionDao;
        this.levelDao = levelDao;
    }

    @Override
    public Question addQuestion(Question question, Level level) {
        level.addQuestion(question);
        return questionDao.save(question);
    }
}
