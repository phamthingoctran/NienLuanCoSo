package com.tkb.backend.dto;

import java.util.List;

public class ScheduleDTO {

    private String id;
    private String name;
    private int credits;
    private List<String> slots;

    public ScheduleDTO(){}

    public ScheduleDTO(String id,String name,int credits,List<String> slots){
        this.id=id;
        this.name=name;
        this.credits=credits;
        this.slots=slots;
    }

    public String getId(){
        return id;
    }

    public void setId(String id){
        this.id=id;
    }

    public String getName(){
        return name;
    }

    public void setName(String name){
        this.name=name;
    }

    public int getCredits(){
        return credits;
    }

    public void setCredits(int credits){
        this.credits=credits;
    }

    public List<String> getSlots(){
        return slots;
    }

    public void setSlots(List<String> slots){
        this.slots=slots;
    }
}