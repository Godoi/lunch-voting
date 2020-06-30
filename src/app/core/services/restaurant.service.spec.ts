import { TestBed, async } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import {
  HttpClientModule,
  HttpErrorResponse
} from '@angular/common/http';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { MOCK_RESTAURANTS } from 'src/app/shared/mocks/restaurants';

let service: RestaurantService;
let httpMock: HttpTestingController;
let httpTestingController: HttpTestingController;

beforeEach(async(() => {
  TestBed.configureTestingModule({
    providers: [RestaurantService],
    imports: [HttpClientModule, HttpClientTestingModule]
  });

  httpTestingController = TestBed.get(HttpTestingController);
  service = TestBed.get(RestaurantService);
  httpMock = TestBed.get(HttpTestingController);
  jest.spyOn(console, 'error').mockImplementation(() => undefined);
}));

describe('RestaurantService', () => {
  const EXPECTED_URL = 'http://localhost:4200/api';

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getAllRestaurants', () => {
    it('should send a get request', () => {
      let week = 'Sat';
      service.getAllRestaurants(week).subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/restaurants/${week}`);
      expect(req.request.method).toBe('GET');
    });
    it('hould call the GET Restaurants api and return all results', () => {
      let dataAll = {};
      let week = 'Sat';
      service.getAllRestaurants(week).subscribe(data => (dataAll = data));
      const req = httpMock.expectOne(`${EXPECTED_URL}/restaurants/${week}`);
      req.flush(MOCK_RESTAURANTS);
      expect(dataAll).toEqual(MOCK_RESTAURANTS);
    });
  });
  describe('getWinningRestaurants', () => {
    it('should send a get request', () => {
      let week = 'Sat';
      service.getWinningRestaurants(week).subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/restaurants/winner/${week}`);
      expect(req.request.method).toBe('GET');
    });
    it('hould call the GET Restaurants api and return all results', () => {
      let dataWinner = {};
      let week = 'Sat';
      service.getWinningRestaurants(week).subscribe(data => (dataWinner = data));
      const req = httpMock.expectOne(`${EXPECTED_URL}/restaurants/winner/${week}`);
      req.flush(MOCK_RESTAURANTS[0]);
      expect(dataWinner).toEqual(MOCK_RESTAURANTS[0]);
    });
  });
  describe('saveVote', () => { 
    it('should send a POST request', () => {
      const mock = {
        "email": "darth.vader@darkside.sith",
        "restaurant_id": 1
      }
      service.saveVote(mock).subscribe();
      const req = httpMock.expectOne(`${EXPECTED_URL}/restaurants/`);
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
