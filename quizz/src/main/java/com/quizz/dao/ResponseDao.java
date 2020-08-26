package com.quizz.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.quizz.model.Response;

@Repository
public interface ResponseDao extends JpaRepository<Response, Long> {

}
