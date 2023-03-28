import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Article } from '../../../types/article';

interface ArchiveState {
  articles: Article[];
}

const initialState: ArchiveState = {
  articles: [],
};

export const archiveSlice = createSlice({
  name: 'archive',
  initialState,
  reducers: {
    addToArchive: (state, action: PayloadAction<Article>) => {
      state.articles.unshift(action.payload);
    },
    removeFromArchive: (state, action: PayloadAction<Article>) => {
      state.articles = state.articles.filter(
        (article) => article.title !== action.payload.title
      );
    },
  },
});

export const { addToArchive, removeFromArchive } = archiveSlice.actions;
export default archiveSlice.reducer;
