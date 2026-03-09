package com.tkb.backend.ga;

import com.tkb.backend.dto.ScheduleDTO;

import java.util.*;

public class TimeTableGeneticAlgorithm {

    private static final int POPULATION_SIZE = 80;
    private static final int GENERATIONS = 200;
    private static final double MUTATION_RATE = 0.1;

    private Random random = new Random();

    public List<Chromosome> runMultiple(List<ScheduleDTO> subjects,int topN){

        List<Chromosome> population = initPopulation(subjects);

        for(int g=0; g<GENERATIONS; g++){

            for(Chromosome c : population){
                c.setFitness(FitnessCalculator.calculate(c));
            }

            population.sort((a,b)->Double.compare(b.getFitness(),a.getFitness()));

            List<Chromosome> newPop = new ArrayList<>();

            while(newPop.size() < POPULATION_SIZE){

                Chromosome p1 = tournament(population);
                Chromosome p2 = tournament(population);

                Chromosome child = crossover(p1,p2);

                mutate(child,subjects);

                newPop.add(child);
            }

            population = newPop;
        }

        population.sort((a,b)->Double.compare(b.getFitness(),a.getFitness()));

        return population.subList(0,Math.min(topN,population.size()));
    }

    private List<Chromosome> initPopulation(List<ScheduleDTO> subjects){

        List<Chromosome> pop = new ArrayList<>();

        for(int i=0;i<POPULATION_SIZE;i++){

            List<Gene> genes = new ArrayList<>();

            for(ScheduleDTO s : subjects){

                if(random.nextBoolean()){
                    genes.add(new Gene(s));
                }
            }

            pop.add(new Chromosome(genes));
        }

        return pop;
    }

    private Chromosome tournament(List<Chromosome> pop){

        Chromosome best=null;

        for(int i=0;i<3;i++){

            Chromosome c = pop.get(random.nextInt(pop.size()));

            if(best==null || c.getFitness()>best.getFitness()){
                best=c;
            }
        }

        return best;
    }

    private Chromosome crossover(Chromosome p1,Chromosome p2){

        List<Gene> genes = new ArrayList<>();

        int size = Math.min(p1.getGenes().size(),p2.getGenes().size());

        if(size==0) return new Chromosome(genes);

        int point = random.nextInt(size);

        for(int i=0;i<size;i++){

            if(i<point)
                genes.add(p1.getGenes().get(i));
            else
                genes.add(p2.getGenes().get(i));
        }

        return new Chromosome(genes);
    }

    private void mutate(Chromosome c,List<ScheduleDTO> subjects){

        if(random.nextDouble()>MUTATION_RATE) return;

        ScheduleDTO s = subjects.get(random.nextInt(subjects.size()));

        c.getGenes().add(new Gene(s));
    }
}