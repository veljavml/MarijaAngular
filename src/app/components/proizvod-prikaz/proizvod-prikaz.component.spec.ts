import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProizvodPrikazComponent } from './proizvod-prikaz.component';

describe('ProizvodPrikazComponent', () => {
  let component: ProizvodPrikazComponent;
  let fixture: ComponentFixture<ProizvodPrikazComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProizvodPrikazComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProizvodPrikazComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
