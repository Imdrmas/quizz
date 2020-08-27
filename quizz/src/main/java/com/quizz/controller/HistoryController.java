package com.quizz.controller;

import com.quizz.dto.HistoryDto;
import com.quizz.manager.HistoryManager;
import com.quizz.model.History;
import com.quizz.servce.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@ResponseBody
@CrossOrigin(origins = "*")
@Controller
public class HistoryController {

    @Autowired
    private HistoryManager historyManager;

    @PostMapping("/addHistory")
    HistoryDto addHistory(@RequestBody HistoryDto historyDto) {
        return historyManager.addHistory(historyDto);
    }
    @PutMapping("/editHistory/{username}")
    HistoryDto editHistory(@RequestBody HistoryDto historyDto, @PathVariable("username") String username) {
        return historyManager.editHistory(historyDto, username);
    }
    @GetMapping("/getHistories")
    List<HistoryDto> getHistories() {
        return historyManager.getHistories();
    }
    @GetMapping("/findHistoryBySore/{score}")
    HistoryDto findHistoryBySore(@PathVariable("score") int score) {
        return historyManager.findHistoryBySore(score);
    }
    @GetMapping("/findHistoryByUsername/{username}")
    HistoryDto findHistoryByUsername(@PathVariable("username") String username) {
        return historyManager.findHistoryByUsername(username);
    }
}
