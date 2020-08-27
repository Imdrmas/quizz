package com.quizz.controller;

import com.quizz.dto.LevelDto;
import com.quizz.manager.LevelManager;
import com.quizz.model.Level;
import com.quizz.servce.LevelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@ResponseBody
@CrossOrigin(origins = "*")
@Controller
public class LevelController {

    private LevelManager levelManager;

    @Autowired
    public LevelController(LevelManager levelManager) {
        this.levelManager = levelManager;
    }

    @PostMapping("/addLevel/{idTheme}")
    public LevelDto addLevel(@RequestBody LevelDto level, @PathVariable("idTheme") Long idTheme) {
        return levelManager.addLevel(level, idTheme);
    }

    @GetMapping("/getLevels/{idTheme}")
    public List<LevelDto> getLevels(@PathVariable("idTheme") Long idTheme) {
        return levelManager.getLevels(idTheme);
    }

    @GetMapping("/getLevel/{idTheme}")
    public LevelDto getLevel(@PathVariable("idTheme") Long idTheme) {
        return levelManager.getLevel(idTheme);
    }
}
