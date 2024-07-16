import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminAddPhotoComponent } from './admin-add-photo.component';

describe('AdminAddPhotoComponent', () => {
  let component: AdminAddPhotoComponent;
  let fixture: ComponentFixture<AdminAddPhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminAddPhotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminAddPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
