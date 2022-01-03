import produce from 'immer';

import { ViewType } from '@t/options';
import { CalendarStore, SetState } from '@t/store';

export type ViewSlice = {
  view: {
    currentView: ViewType;
  };
};

export type ViewDispatchers = {
  changeView: (view: ViewType) => void;
};

export function createViewSlice(initialView: ViewType = 'month'): ViewSlice {
  return {
    view: {
      currentView: initialView,
    },
  };
}

export function createViewDispatchers(set: SetState<CalendarStore>): ViewDispatchers {
  return {
    changeView: (nextView: ViewType) =>
      set(
        produce((state) => {
          state.view.currentView = nextView;
        })
      ),
  };
}