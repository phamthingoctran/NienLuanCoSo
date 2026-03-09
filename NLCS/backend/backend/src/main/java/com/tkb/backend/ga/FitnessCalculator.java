package com.tkb.backend.ga;

import java.util.HashSet;
import java.util.Set;

public class FitnessCalculator {

    private static final int MAX_CREDITS = 20;

    public static double calculate(Chromosome chromosome){

        int totalCredits = 0;
        int conflicts = 0;

        Set<String> usedSlots = new HashSet<>();

        for(Gene g : chromosome.getGenes()){

            totalCredits += g.getSubject().getCredits();

            for(String slot : g.getSubject().getSlots()){

                if(!usedSlots.add(slot)){
                    conflicts++;
                }
            }
        }

        double fitness = 0;

        fitness += totalCredits * 10;
        fitness -= conflicts * 50;

        if(totalCredits > MAX_CREDITS){
            fitness -= (totalCredits - MAX_CREDITS) * 100;
        }

        return fitness;
    }
}