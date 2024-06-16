import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';

import { v4 as uuid  } from 'uuid';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'BMW', model: 'CTX' },
    { id: uuid(), brand: 'Volksvagen', model: 'Polo' },
  ];

  findAll() {
    return this.cars;
  }

  findOneById(id: string) {
    const car = this.cars.find((car) => car.id === id);
    if (!car) {
      throw new NotFoundException(`Car with id ${id} not found`);
    }
    return car;
  }

  create(createCarDto: CreateCarDto ) {
    const car = {id: uuid(), ...createCarDto};
    this.cars.push(car);
    return car
  }

  update(updateCarDto: UpdateCarDto, id: string) {
    let carDb = this.findOneById(id);

    if(updateCarDto.id && updateCarDto.id !== id) 
      throw new BadRequestException(`car id is not valid inside body`)

    this.cars  = this.cars.map(car => {
        if(car.id === id) {
          carDb = { ...carDb, ...updateCarDto, id}
          return carDb;
        }
        return car;
    });

    return carDb;

  }

  delete(id: string){

    this.findOneById(id);

    this.cars = this.cars.filter(car => car.id !== id)

  }
}
