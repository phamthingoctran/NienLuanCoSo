package com.tkb.backend.service;

import com.tkb.backend.controller.ScheduleResult;
import com.tkb.backend.dto.SubjectGroupRequest;
import com.tkb.backend.ga.*;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TimetableService {

    public List<ScheduleResult> generate(SubjectGroupRequest request){

        TimeTableGeneticAlgorithm ga = new TimeTableGeneticAlgorithm();

        List<Chromosome> results =
                ga.runMultiple(request.getSubjects(),2);

        return results.stream().map(c->{

            int credits = c.getGenes()
                    .stream()
                    .mapToInt(g->g.getSubject().getCredits())
                    .sum();

            List<ScheduleResult.ResultItem> items =
                    c.getGenes().stream()
                    .map(g-> new ScheduleResult.ResultItem(
                            g.getSubject().getName(),
                            g.getSubject().getSlots()))
                    .collect(Collectors.toList());

            return new ScheduleResult(
                    c.getFitness(),
                    credits,
                    items
            );

        }).collect(Collectors.toList());
    }
}