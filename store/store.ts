import { atom } from 'recoil';

export const locationAtom = atom({
  key: 'locationAtom',
  default: {
    lat: '',
    lon: '',
  },
});
