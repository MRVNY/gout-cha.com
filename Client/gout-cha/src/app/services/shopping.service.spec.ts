import { TestBed } from '@angular/core/testing';

import { ShoppingService } from './shopping.service';
import { ShoppingItem } from '../Models/shopping-item';

describe('ShoppingService', () => {
  let service: ShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
