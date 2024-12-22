import { NavItems } from "../exports";
import {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useContext,
} from "react";
interface State {
  activeNavItem: string;
}
interface Action {
  type: string;
  payload?: string;
}
type Dispatch = (action: Action) => void;
interface DashboardProviderProps {
  children: ReactNode;
}
const initialState = { activeNavItem: NavItems[0]?.path || "" };
const DashboardStateContext = createContext<State | undefined>(undefined);
const DashboardDispathContext = createContext<Dispatch | undefined>(undefined);
const DashboardReducer = (state: State, action: Action) => {
  const { type,payload } = action;
  switch (type) {
    case "SET_ACTIVE_NAV":
      return { ...state, activeNavItem: payload || "repositories" };
    default:
      return state;
  }
};
export const DashboardProvider = ({ children }: DashboardProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    DashboardReducer,
    initialState
  );
  return (
    <DashboardStateContext.Provider value={state}>
      <DashboardDispathContext.Provider value={dispatch}>
        {children}
      </DashboardDispathContext.Provider>
    </DashboardStateContext.Provider>
  );
};
export const useDashboardState = () => {
  const context = useContext(DashboardStateContext);
  if (!context)
    throw new Error("useDashboardState must be used within a DashboardProvider");
  return context;
};
export const useDashboardDispatch = () => {
  const context = useContext(DashboardDispathContext);
  if (!context)
    throw new Error("useSignInDispatch must be used within a DashboardProvider");
  return context;
};
