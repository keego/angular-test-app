import uuidv4 from 'uuid/v4';
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: uuidv4(),  name: 'Zero', info: 'No info here', sidekick: true },
      { id: uuidv4(), name: 'Mr. Nice' },
      { id: uuidv4(), name: 'Narco' },
      { id: uuidv4(), name: 'Bombasto' },
      { id: uuidv4(), name: 'Celeritas' },
      { id: uuidv4(), name: 'Magneta' },
      { id: uuidv4(), name: 'RubberMan' },
      { id: uuidv4(), name: 'Dynama' },
      { id: uuidv4(), name: 'Dr IQ' },
      { id: uuidv4(), name: 'Magma' },
      { id: uuidv4(), name: 'Tornado' },
    ];

    return { heroes };
  }
}
