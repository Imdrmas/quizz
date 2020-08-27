package com.quizz.manager;

import com.quizz.dto.HistoryDto;
import com.quizz.model.History;

import java.util.List;

public interface HistoryManager {
    HistoryDto addHistory(HistoryDto historyDto);

    List<HistoryDto> getHistories();

    HistoryDto findHistoryBySore(int score);

    HistoryDto findHistoryByUsername(String username);

    HistoryDto editHistory(HistoryDto historyDto, String username);
}
