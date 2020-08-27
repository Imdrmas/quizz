package com.quizz.manager;

import com.quizz.dto.ThemeDto;
import com.quizz.model.Theme;

import java.util.List;

public interface ThemeManager {
    ThemeDto addTheme(ThemeDto themeDto);

    List<ThemeDto> getThemes();

    ThemeDto getTheme(Long idTheme);
}
