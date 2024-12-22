import {
  createContext,
  ReactNode,
  useReducer,
  Reducer,
  useContext,
} from "react";
interface State {
  signInOption: boolean;
}
interface Action {
  type: string;
}
type Dispatch = (action: Action) => void;
interface SignInProviderProps {
  children: ReactNode;
}
const initialState = { signInOption: true };
const SignInStateContext = createContext<State | undefined>(undefined);
const SignInDispathContext = createContext<Dispatch | undefined>(undefined);
const SignInReducer = (state: State, action: Action) => {
  const { type } = action;
  switch (type) {
    case "SASS":
      return { ...state, signInOption: true };
    case "SELF_HOSTED":
      return { ...state, signInOption: false };
    default:
      return state;
  }
};
export const SignInProvider = ({ children }: SignInProviderProps) => {
  const [state, dispatch] = useReducer<Reducer<State, Action>>(
    SignInReducer,
    initialState
  );
  return (
    <SignInStateContext.Provider value={state}>
      <SignInDispathContext.Provider value={dispatch}>
        {children}
      </SignInDispathContext.Provider>
    </SignInStateContext.Provider>
  );
};
export const useSignInState = () => {
  const context = useContext(SignInStateContext);
  if (!context)
    throw new Error("useSignInState must be used within a SignInProvider");
  return context;
};
export const useSignInDispatch = () => {
  const context = useContext(SignInDispathContext);
  if (!context)
    throw new Error("useSignInDispatch must be used within a SignInProvider");
  return context;
};
