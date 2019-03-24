import { createAction } from '../../common/redux';

export enum ActionType {
  SetName = 'person_setName',
  SetAge = 'person_setAge',
}

export const actions = {
  setName: (name: string) => createAction(ActionType.SetName, { name }),
  setAge: (age: number) => createAction(ActionType.SetAge, { age }),
};
