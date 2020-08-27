package com.quizz;

import com.quizz.dao.ThemeDao;
import com.quizz.model.Theme;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class QuizzApplication {

    @Autowired
    private ThemeDao themeDao;

    public static void main(String[] args) {
        SpringApplication.run(QuizzApplication.class, args);
        System.out.println("App Started");
    }
    @Bean
    CommandLineRunner runner() {
        return args -> {
       //  themeDao.save(new Theme("Java"));
        };
    }

}
