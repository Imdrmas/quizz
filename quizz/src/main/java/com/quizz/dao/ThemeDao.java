package com.quizz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizz.model.Theme;

@Repository
public interface ThemeDao extends JpaRepository<Theme, Long> {

}
