package com.quizz.model;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.annotations.NaturalId;

import lombok.*;


@Entity
public class Level {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String difficulty;

	@OneToMany(mappedBy = "level", cascade = CascadeType.ALL)
	private List<Question> questions;
	
	@ManyToOne
	private Theme theme;

	public void addQuestion(Question question) {
		if (getQuestions()==null) {
			this.questions = new ArrayList<>();
		}
		getQuestions().add(question);
		question.setLevel(this);
	}

	public Level() {
	}

	public Level(String difficulty, List<Question> questions, Theme theme) {
		this.difficulty = difficulty;
		this.questions = questions;
		this.theme = theme;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDifficulty() {
		return difficulty;
	}

	public void setDifficulty(String difficulty) {
		this.difficulty = difficulty;
	}

	public List<Question> getQuestions() {
		return questions;
	}

	public void setQuestions(List<Question> questions) {
		this.questions = questions;
	}

	public Theme getTheme() {
		return theme;
	}

	public void setTheme(Theme theme) {
		this.theme = theme;
	}
}
