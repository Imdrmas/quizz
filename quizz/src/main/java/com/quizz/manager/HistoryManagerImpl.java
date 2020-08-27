package com.quizz.manager;

import com.quizz.dao.HistoryDao;
import com.quizz.dto.HistoryDto;
import com.quizz.model.History;
import com.quizz.model.OrikaBeanMapper;
import com.quizz.servce.HistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Transactional
@Service
public class HistoryManagerImpl implements HistoryManager {

    private OrikaBeanMapper orikaBeanMapper;

    private HistoryDao historyDao;

    private HistoryService historyService;

    @Autowired
    public HistoryManagerImpl(OrikaBeanMapper orikaBeanMapper, HistoryDao historyDao,
                              HistoryService historyService) {
        this.orikaBeanMapper = orikaBeanMapper;
        this.historyDao = historyDao;
        this.historyService = historyService;
    }

    @Override
    public HistoryDto addHistory(HistoryDto historyDto) {
        History history = orikaBeanMapper.map(historyDto, History.class);
        return orikaBeanMapper.convertDTO(historyService.addHistory(history), HistoryDto.class);
    }

    @Override
    public List<HistoryDto> getHistories() {
        List<History> histories = historyDao.findAll();
        histories.sort((f1, f2) -> Long.compare(f2.getSore(), f1.getSore()));

        return orikaBeanMapper.convertListDTO(histories, HistoryDto.class);
    }

    @Override
    public HistoryDto findHistoryBySore(int score) {
        return orikaBeanMapper.convertDTO(historyDao.findHistoryBySore(score), HistoryDto.class);
    }

    @Override
    public HistoryDto findHistoryByUsername(String username) {
        return orikaBeanMapper.convertDTO(historyDao.findHistoryByUsername(username), HistoryDto.class);
    }

    @Override
    public HistoryDto editHistory(HistoryDto historyDto, String username) {
        History history = orikaBeanMapper.map(historyDto, History.class);
        History history1 = historyDao.findHistoryByUsername(username);
        return orikaBeanMapper.convertDTO(historyService.editHistory(history, history1), HistoryDto.class);
    }
}
