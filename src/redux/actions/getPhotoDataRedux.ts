import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ResponseSearchPhotoData } from '../../types/apiData';
import { SearchFormValues } from '../../types/formData';

const baseUrl: string | undefined = process.env.REACT_APP_BASE_URL;
const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

export const getPhotoData = createAsyncThunk<ResponseSearchPhotoData, SearchFormValues>(
  'cards/photoData',
  async (searchFormValues: SearchFormValues, { rejectWithValue }) => {
    try {
      if (baseUrl && apiKey) {
        const response = await axios.get<ResponseSearchPhotoData>(
          `${baseUrl}search?query=${searchFormValues.searchValue}&per_page=${searchFormValues.selectPerPage}
            &page=${searchFormValues.page}&size=${searchFormValues.size}&color=${searchFormValues.color}
            &orientation=${searchFormValues.orientation}`,
          {
            headers: {
              Authorization: apiKey,
            },
          }
        );
        if (response.data.photos.length === 0) throw new Error('No data for this request');
        return response.data;
      }
      throw new Error('Error with token');
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
