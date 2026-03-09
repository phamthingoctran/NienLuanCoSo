package com.tkb.backend.ga;

import java.util.ArrayList;
import java.util.List;

public class Chromosome {

    private List<Gene> genes = new ArrayList<>();
    private double fitness;

    public Chromosome(){}

    public Chromosome(List<Gene> genes){
        this.genes = genes;
    }

    public List<Gene> getGenes(){
        return genes;
    }

    public void setGenes(List<Gene> genes){
        this.genes = genes;
    }

    public double getFitness(){
        return fitness;
    }

    public void setFitness(double fitness){
        this.fitness = fitness;
    }
}