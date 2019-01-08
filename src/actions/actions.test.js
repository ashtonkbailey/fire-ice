import * as actions from './index';

it('should return an object with type of ADD_HOUSES and matching payload', () => {
  const houses = [
    { name: 'House', title: 'Lord'}
  ];
  const expected = {
    type: 'ADD_HOUSES',
    houses
  };
  const result = actions.addHouses(houses);
  expect(result).toEqual(expected);
});

it('should return an object with type of IS_LOADING and matching payload', () => {
  const expected = {
    type: 'IS_LOADING',
    isLoading: true
  };
  const result = actions.isLoading(true);
  expect(result).toEqual(expected);
});

it('should return an object with type of SET_ERROR and matching payload', () => {
  const error = 'Oops!';
  const expected = {
    type: 'SET_ERROR',
    error: 'Oops!'
  };
  const result = actions.setError(error);
  expect(result).toEqual(expected);
});

