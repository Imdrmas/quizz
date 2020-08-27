package com.quizz.servce;

import com.quizz.model.History;

public interface HistoryService {
    History addHistory(History history);

    History editHistory(History history, History history1);
}
