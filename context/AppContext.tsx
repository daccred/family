import { createContext, useContext, useReducer, ReactNode, useEffect } from "react";
import { useAuthModal, useLogout, useSignerStatus, useUser } from "@account-kit/react";

interface AppState {
  isLoading: boolean;
  darkMode: boolean;
  notifications: number;
  isInitializing: boolean;
  user: ReturnType<typeof useUser>;
}

type AppAction = 
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'TOGGLE_THEME' }
  | { type: 'SET_NOTIFICATIONS'; payload: number }
  | { type: 'SET_USER'; payload: ReturnType<typeof useUser> }
  | { type: 'SET_INITIALIZING'; payload: boolean };

const initialState: AppState = {
  isLoading: false,
  darkMode: true,
  notifications: 0,
  isInitializing: true,
  user: null,
};

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  authActions: {
    openAuthModal: () => void;
    logout: () => void;
  };
}>({ state: initialState, dispatch: () => null, authActions: { openAuthModal: () => null, logout: () => null } });

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'TOGGLE_THEME':
      return { ...state, darkMode: !state.darkMode };
    case 'SET_NOTIFICATIONS':
      return { ...state, notifications: action.payload };
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_INITIALIZING':
      return { ...state, isInitializing: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const user = useUser();
  const { openAuthModal } = useAuthModal();
  const signerStatus = useSignerStatus();
  const { logout } = useLogout();

  // Sync auth state
  useEffect(() => {
    dispatch({ type: 'SET_USER', payload: user });
    dispatch({ type: 'SET_INITIALIZING', payload: signerStatus.isInitializing });
  }, [user, signerStatus.isInitializing]);

  const authActions = {
    openAuthModal,
    logout,
  };

  return (
    <AppContext.Provider value={{ state, dispatch, authActions }}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext); 