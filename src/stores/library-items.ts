import { writable } from "svelte/store";

const LOCAL_STORAGE_KEY = "library";

type LibraryItemData = {
  owned?: boolean;
  played?: boolean;
  finished?: boolean;
};

type LibraryItems = {
  [guid: string]: LibraryItemData;
};

function createStore() {
  let savedStore: LibraryItems;
  try {
    savedStore =
      (JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) as LibraryItems) ||
      {};
  } catch {
    savedStore = {};
  }
  const { update, subscribe } = writable<LibraryItems>(savedStore);

  subscribe((store) =>
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(store))
  );

  return {
    subscribe,
    updateItem: (guid: GiantBomb.Game["guid"], data: LibraryItemData = {}) =>
      update((store) => ({ ...store, [guid]: { ...store[guid], ...data } })),
    removeItem: (guid: GiantBomb.Game["guid"]) =>
      update((store) => {
        delete store[guid];
        return { ...store };
      }),
  };
}

export const libraryItems = createStore();
