import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefeiroComponent } from './tarefeiro.component';

describe('TarefeiroComponent', () => {
  let component: TarefeiroComponent;
  let fixture: ComponentFixture<TarefeiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarefeiroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefeiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
