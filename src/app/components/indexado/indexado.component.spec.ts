import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexadoComponent } from './indexado.component';

describe('IndexadoComponent', () => {
  let component: IndexadoComponent;
  let fixture: ComponentFixture<IndexadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
