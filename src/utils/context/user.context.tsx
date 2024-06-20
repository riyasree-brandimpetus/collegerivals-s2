'use client';

import React, { Dispatch, createContext, useReducer } from 'react';
import { UserDetailsType } from '@/types/user/user';


const initialState: UserDetailsType = {
  name: '',
  email: '',
  whatsappNumber: '',
  whatsappCountryCode: '',
  age: 0,
  cityCenter: '',
  degreeStudyField: '',
  idUrl: '',
  verified: false,
  _id: '',
  isWhatsAppVerified: false,
  isUserVerified: false,
  collegeName: '',
  gameDetails: [],
  isLoggedIn:false
  // hasBasicDetails: false,
  // step: '1.1',
}; //1.1 - Basic details,1.2- OTP,2.1-Academic Details, 3.1- Game Selection, 3.2 - Game Details

type ActionType = {
  type: string;
  payload?: UserDetailsType;
};

const reducer = (state: UserDetailsType, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE':
      return { ...state, ...action.payload };
    case 'DELETE':
      return { ...initialState };
    default:
      return state;
  }
};

export const UserContext = createContext<{
  state: UserDetailsType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
