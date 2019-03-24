import { createAction } from '../../common/redux';

export enum ActionType {
  SetName = 'product_setName',
  SetPrice = 'product_setPrice',
  IncreaseCount = 'product_increaseCount',
}

export const actions = {
  setName: (name: string) => createAction(ActionType.SetName, { name }),
  setPrice: (price: number) => createAction(ActionType.SetPrice, { price }),
  increaseCount: () => createAction(ActionType.IncreaseCount),
};
