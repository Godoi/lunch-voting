import { TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  HttpClientModule, HttpErrorResponse
} from '@angular/common/http';
import { UserService } from './user.service';
import { MOCK_USERS } from 'src/app/shared/mocks/user';

let service: UserService;
let httpMock: HttpTestingController;
let httpTestingController: HttpTestingController;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    providers: [UserService],
    imports: [HttpClientModule, HttpClientTestingModule]
  });

  httpTestingController = TestBed.get(HttpTestingController);
  service = TestBed.get(UserService);
  httpMock = TestBed.get(HttpTestingController);
  jest.spyOn(console, 'error').mockImplementation(() => undefined);
}));

describe('UserService', () => {
  const EXPECTED_URL = 'http://localhost:4200/api';

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getAllUsers', () => {
    it('should send a get request', () => {
      service.getAllUsers().subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/users`);
      expect(req.request.method).toBe('GET');
    });
    it('hould call the GET Restaurants api and return all results', () => {
      let dataAll = {};
      service.getAllUsers().subscribe(data => (dataAll = data));
      const req = httpMock.expectOne(`${EXPECTED_URL}/users`);
      req.flush(MOCK_USERS);
      expect(dataAll).toEqual(MOCK_USERS);
    });
  });
  describe('login', () => { 
    it('should send a POST request', () => {
      const email = "darth.vader@darkside.sith";
      service.login(email).subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/users/login`);
      expect(req.request.method).toBe('POST');
    });
  });
  describe('handleError', () => {
    it('should return an observable of undefined and print error to console', () => {
      const result = service.handleError(
        new HttpErrorResponse({ error: 'Error occurs' }),
        'test method'
      );
      result.subscribe(value => expect(value).toBeUndefined());
    });
  });
});