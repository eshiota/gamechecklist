import { writable } from "svelte/store";

export const games = writable<GiantBomb.Game[]>([]);
