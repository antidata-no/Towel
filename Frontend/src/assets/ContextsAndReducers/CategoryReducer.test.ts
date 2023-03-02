import CategoryReducer from './CategoryReducer';
import { ICategory } from '../interfaces/Interfaces';
import { IDispatchAction } from '../interfaces/Interfaces';

describe('CategoryReducer', () => {
  const initialState: ICategory[] = [
    { _id: '1', title: 'Category 1', items: [] },
    { _id: '2', title: 'Category 2', items: [] },
    { _id: '3', title: 'Category 3', items: [] },
  ];

//   it('should return initial state', () => {
//     expect(CategoryReducer(initialState, {})).toEqual(initialState);
//   });

  it('should set categories', () => {
    const action = { type: 'set', payload: [
      { _id: '4', title: 'Category 4', items: [] },
      { _id: '5', title: 'Category 5', items: [] },
    ]};
    expect(CategoryReducer(initialState, action)).toEqual(action.payload);
  });

  it('should add categories', () => {
    const action = { type: 'add', payload: [
      { _id: '4', title: 'Category 4', items: [] },
      { _id: '5', title: 'Category 5', items: [] },
    ]};
    expect(CategoryReducer(initialState, action)).toEqual([
      ...initialState,
      ...action.payload,
    ]);
  });

  it('should delete categories', () => {
    const action = { type: 'delete', payload: [{ _id: '2', title: "", items:[] }] };
    expect(CategoryReducer(initialState, action)).toEqual([
      { _id: '1', title: 'Category 1', items: [] },
      { _id: '3', title: 'Category 3', items: [] },
    ]);
  });

  it('should replace categories', () => {
    const action = { type: 'replace', payload: [
      { _id: '2', title: 'Updated Category', items: [] },
      { _id: '2', title: 'Updated Category', items: [] },
    ]};
    expect(CategoryReducer(initialState, action)).toEqual([
      { _id: '1', title: 'Category 1', items: [] },
      { _id: '2', title: 'Updated Category', items: [] },
      { _id: '3', title: 'Category 3', items: [] },
    ]);
  });

  it('should add item to category', () => {
    const action = { type: 'additem', payload: [
      { _id: '2', title: 'Category 2', items: [{ _id: '1', title: 'Item 1', checked: false }] },
    ]};
    expect(CategoryReducer(initialState, action)).toEqual([
      { _id: '1', title: 'Category 1', items: [] },
      { _id: '2', title: 'Category 2', items: [{ _id: '1', title: 'Item 1', checked: false }] },
      { _id: '3', title: 'Category 3', items: [] },
    ]);
  });
});