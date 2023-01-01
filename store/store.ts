import { atom } from 'recoil';

export const locationAtom = atom({
  key: 'locationAtom',
  default: {
    lat: 0,
    lng: 0,
  },
});

export const headerTitle = atom({
  key: 'headerTitle',
  default: '거기 지금 어디야',
});

export const currentLocation = atom({
  key: 'currentLocation',
  default: '',
});
