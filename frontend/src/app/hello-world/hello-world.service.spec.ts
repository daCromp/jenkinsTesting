import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';


import { HelloWorldService } from './hello-world.service';

describe('HelloWorldService', () => {
  let service: HelloWorldService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(HelloWorldService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  })

  it('should get message', () => {
    service.getMessage().subscribe(message => {
      expect(message).toBeDefined();
    })
  })
});

