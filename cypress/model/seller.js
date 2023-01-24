import { faker } from '@faker-js/faker';
import { generatePhone, generateCep } from '../utils/SellerData/generateBrazillianData';
import { generate } from 'gerador-validador-cpf'


export class sellerFactory {
    static Build() {
        return {
            name: faker.name.findName(),
            phone: generatePhone(),
            cpf: generate(),
            cep: generateCep(),
            birthday: '28/04/1994',
            email: faker.internet.email(),
            password: faker.internet.password(),
            addressNumber: '1220',
            addressComplement: 'bl 3 apto 52',
           
            
        }
    }
}