import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaPermanenteComponent } from './vida-permanente.component';

describe('VidaPermanenteComponent', () => {
  let component: VidaPermanenteComponent;
  let fixture: ComponentFixture<VidaPermanenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidaPermanenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidaPermanenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
