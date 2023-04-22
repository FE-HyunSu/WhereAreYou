import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();
export const locationAtom = atom({
  key: 'locationAtom',
  default: {
    lat: 0,
    lng: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export const headerTitle = atom({
  key: 'headerTitle',
  default: '거기 지금 어디야',
  effects_UNSTABLE: [persistAtom],
});

export const currentLocation = atom({
  key: 'currentLocation',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
