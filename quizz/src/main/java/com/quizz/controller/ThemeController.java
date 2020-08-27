package com.quizz.controller;

import com.quizz.dto.ThemeDto;
import com.quizz.manager.ThemeManager;
import com.quizz.model.Theme;
import com.quizz.servce.ThemeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api")
@ResponseBody
@CrossOrigin(origins = "*")
@Controller
public class ThemeController {

    @Autowired
    private ThemeManager themeManager;

    @PostMapping("/addTheme")
    public ThemeDto addTheme(@RequestBody ThemeDto theme) {
        return themeManager.addTheme(theme);
    }

    @GetMapping("/getThemes")
    public List<ThemeDto> getThemes() {
        return themeManager.getThemes();
    }
    @GetMapping("/getTheme/{idTheme}")
    public ThemeDto getTheme(@PathVariable("idTheme") Long idTheme) {
        return themeManager.getTheme(idTheme);
    }
}
