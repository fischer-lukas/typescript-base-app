import { Service } from 'typedi';
import { NewBeer } from '../domain/new-beer';
import { BeerDto } from '../domain/beer-dto';
import { Beer } from '../domain/beer';
import { BeerUpdate } from '../domain/beer-update';
import { BEER_SERVICE } from '../config/services';

@Service(BEER_SERVICE)
export class BeerService {

    async addNewBeer(newBeer: NewBeer): Promise<BeerDto> {
        const addedBeer: Beer = {
            name: '',
            brewery: '',
            type: 'lager',
            volPerc: 3,
            t_added: new Date()
        };
        return beerDto(addedBeer);
    }

    async findOneById(id: string): Promise<BeerDto | null> {
        const addedBeer: Beer = {
            name: '',
            brewery: '',
            type: 'lager',
            volPerc: 3,
            t_added: new Date()
        };
        return beerDto(addedBeer);
    }

    async findAll(): Promise<BeerDto[]> {
        const addedBeer: Beer = {
            name: '',
            brewery: '',
            type: 'lager',
            volPerc: 3,
            t_added: new Date()
        };
        return [beerDto(addedBeer)];
    }

    async findStrongBeers(): Promise<BeerDto[]> {
        const addedBeer: Beer = {
            name: '',
            brewery: '',
            type: 'lager',
            volPerc: 3,
            t_added: new Date()
        };
        return [beerDto(addedBeer)];
    }

    async updateBeer(beerUpdate: BeerUpdate, beerId: string): Promise<BeerDto | null> {
        const addedBeer: Beer = {
            name: '',
            brewery: '',
            type: 'lager',
            volPerc: 3,
            t_added: new Date()
        };
        return beerDto(addedBeer);
    }

}

function beerDto(beer: Beer): BeerDto {
    const { _id, ...rest } = beer; // destruct beer object
    return { ...rest, id: _id?.toHexString() }; // construct dto
}