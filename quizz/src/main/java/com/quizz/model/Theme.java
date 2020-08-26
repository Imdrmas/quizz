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
public class Theme {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	private String name;
	
	@OneToMany(mappedBy = "theme", cascade = CascadeType.ALL)
	private List<Level> levels;
	
	
	public void addLevel(Level level) {
		if(getLevels()==null) {
			this.levels = new ArrayList<>();
		}
		getLevels().add(level);
		level.setTheme(this);
		
	}

}
