import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrearregloComponent } from './prearreglo.component';

describe('PrearregloComponent', () => {
  let component: PrearregloComponent;
  let fixture: ComponentFixture<PrearregloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrearregloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrearregloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
