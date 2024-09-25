import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { authReducer } from './auth';
import { loadState, saveState } from './store';

const persistedState = loadState();

const rootReducer = combineReducers({ auth: authReducer });
export type RootState = ReturnType<typeof rootReducer>;

// Agrega automáticamente el middleware thunk y la extensión Redux DevTools
export const store = configureStore({
  // Llama automáticamente a `combineReducers`
  reducer: rootReducer,
  preloadedState: persistedState,
});

store.subscribe(() => saveState(store.getState()));

// Tipo inferido: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Úselo en toda su aplicación en lugar de simplemente `useDispatch` y `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
