package com.tkb.backend.dto;

import java.util.List;

public class SubjectGroupRequest {

    private List<ScheduleDTO> subjects;

    public SubjectGroupRequest() {
    }

    public List<ScheduleDTO> getSubjects() {
        return subjects;
    }

    public void setSubjects(List<ScheduleDTO> subjects) {
        this.subjects = subjects;
    }
}