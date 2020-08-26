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

import org.hibernate.annotations.NaturalId;

import lombok.*;


@Data
@Getter
@Setter
@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Entity
public class Level {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
	@Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
	private Difficulty difficulty;
	
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

}
