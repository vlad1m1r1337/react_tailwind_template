import { create } from 'zustand';

interface SortState {
    sortBy: string;
    setSortBy: (sortBy: string) => void;
}

interface FilterState {
    transferType: 'direct' | 'one-stop' | '';
    setTransferType: (transferType: 'direct' | 'one-stop' | '') => void;
}

export const useSortStore = create<SortState>((set) => ({
    sortBy: 'asc',
    setSortBy: (sortBy) => set({ sortBy }),
}));

export const useFilterStore = create<FilterState>((set) => ({
    transferType: '',
    setTransferType: (transferType) => set({ transferType }),
}));