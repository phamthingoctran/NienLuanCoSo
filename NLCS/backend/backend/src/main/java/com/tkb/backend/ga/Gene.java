package com.tkb.backend.ga;

import com.tkb.backend.dto.ScheduleDTO;

public class Gene {

    private ScheduleDTO subject;

    public Gene(ScheduleDTO subject){
        this.subject=subject;
    }

    public ScheduleDTO getSubject(){
        return subject;
    }

    public void setSubject(ScheduleDTO subject){
        this.subject=subject;
    }
}