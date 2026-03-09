package com.tkb.backend.controller;

import java.util.List;

public class ScheduleResult {

    private double fitness;
    private int totalCredits;
    private List<ResultItem> subjects;

    public ScheduleResult(double fitness,
                          int totalCredits,
                          List<ResultItem> subjects) {
        this.fitness = fitness;
        this.totalCredits = totalCredits;
        this.subjects = subjects;
    }

    public double getFitness() { return fitness; }
    public int getTotalCredits() { return totalCredits; }
    public List<ResultItem> getSubjects() { return subjects; }

    public static class ResultItem {

        private String name;
        private List<String> slots;

        public ResultItem(String name,
                          List<String> slots) {
            this.name = name;
            this.slots = slots;
        }

        public String getName() { return name; }
        public List<String> getSlots() { return slots; }
    }
}