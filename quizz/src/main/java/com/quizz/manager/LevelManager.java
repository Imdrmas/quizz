package com.quizz.manager;

import com.quizz.dto.LevelDto;

import java.util.List;

public interface LevelManager {
     LevelDto addLevel(LevelDto levelDto, Long idTheme);

    List<LevelDto> getLevels(Long idTheme);

    LevelDto getLevel(Long idTheme);
}
