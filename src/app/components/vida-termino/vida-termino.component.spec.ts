import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VidaTerminoComponent } from './vida-termino.component';

describe('VidaTerminoComponent', () => {
  let component: VidaTerminoComponent;
  let fixture: ComponentFixture<VidaTerminoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VidaTerminoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VidaTerminoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
