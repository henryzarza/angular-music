import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsConfigurationComponent } from './settings-configuration.component';

describe('SettingsConfigurationComponent', () => {
  let component: SettingsConfigurationComponent;
  let fixture: ComponentFixture<SettingsConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
