package com.quizz.controller;

import com.quizz.dto.QuestionDto;
import com.quizz.manager.QuestionManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@ResponseBody
@CrossOrigin(origins = "*")
@Controller
public class QuestionController {

    @Autowired
    private QuestionManager questionManager;

    @PostMapping("/addQuestion/{idLevel}")
    QuestionDto addQuestion(@RequestBody QuestionDto questionDto, @PathVariable("idLevel") Long idLevel) {
        return questionManager.addQuestion(questionDto, idLevel);
    }
    @GetMapping("/getQuestions/{idLevel}")
    List<QuestionDto> getQuestions(@PathVariable("idLevel") Long idLevel)  {
        return questionManager.getQuestions(idLevel);
    }
}
