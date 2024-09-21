import {create} from 'zustand';

interface SortState {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
}

export const useSortStore = create<SortState>((set) => ({
    sortBy: 'asc', // default sorting
    setSortBy: (sortBy) => set({ sortBy }),
}));