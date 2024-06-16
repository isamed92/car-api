import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid  } from 'uuid';

export const CARS_SEED: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'BMW', model: 'CTX' },
    { id: uuid(), brand: 'Volkswagen', model: 'Polo' },
    { id: uuid(), brand: 'Toyota', model: 'Camry' },
    { id: uuid(), brand: 'BMW', model: 'X5' },
    { id: uuid(), brand: 'Volkswagen', model: 'Golf' },
    { id: uuid(), brand: 'Toyota', model: 'Yaris' },
    { id: uuid(), brand: 'BMW', model: '3 Series' },
    { id: uuid(), brand: 'Volkswagen', model: 'Passat' },
    { id: uuid(), brand: 'Toyota', model: 'Avalon' },
    { id: uuid(), brand: 'BMW', model: '5 Series' },
    { id: uuid(), brand: 'Volkswagen', model: 'Tiguan' },
    { id: uuid(), brand: 'Toyota', model: 'RAV4' },
    { id: uuid(), brand: 'BMW', model: '7 Series' },
    { id: uuid(), brand: 'Volkswagen', model: 'Touareg' },
    { id: uuid(), brand: 'Toyota', model: 'Highlander' },
    { id: uuid(), brand: 'BMW', model: 'X3' },
    { id: uuid(), brand: 'Volkswagen', model: 'Beetle' },

]