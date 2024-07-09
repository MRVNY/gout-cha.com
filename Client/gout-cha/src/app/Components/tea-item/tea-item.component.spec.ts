import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaItemComponent } from './tea-item.component';

describe('TeaItemComponent', () => {
  let component: TeaItemComponent;
  let fixture: ComponentFixture<TeaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
