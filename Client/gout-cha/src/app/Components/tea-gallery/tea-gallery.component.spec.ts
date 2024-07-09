import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaGalleryComponent } from './tea-gallery.component';

describe('TeaGalleryComponent', () => {
  let component: TeaGalleryComponent;
  let fixture: ComponentFixture<TeaGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeaGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
