package com.quizz.model;


import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.*;


@Data
@Getter
@Setter
@RequiredArgsConstructor(staticName = "of")
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
@Entity
public class Question {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String question;
	
	@ManyToOne
	private Level level;
	
	@OneToMany(mappedBy = "question", cascade = CascadeType.ALL)
	private List<Response> responses;
	
	public void addResponse(Response response) {
		if (getResponses()==null) {
			this.responses = new ArrayList<>();
		}
		getResponses().add(response);
		response.setQuestion(this);
	}
	

}
