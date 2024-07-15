import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PuErComponent } from './pu-er.component';

describe('PuErComponent', () => {
  let component: PuErComponent;
  let fixture: ComponentFixture<PuErComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PuErComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PuErComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
