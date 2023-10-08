import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomeComponentComponent } from './nome-component.component';

describe('NomeComponentComponent', () => {
  let component: NomeComponentComponent;
  let fixture: ComponentFixture<NomeComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NomeComponentComponent]
    });
    fixture = TestBed.createComponent(NomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
