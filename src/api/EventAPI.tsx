import axios from "axios";
import { IEvent } from "../types/events.interface";

const baseSegment = "events";

export const getEvents = async () => {
  return axios.get(`${process.env.REACT_APP_API_URL}/${baseSegment}`);
};

export const createEvent = async (event: Partial<IEvent>) => {
  return axios.post(`${process.env.REACT_APP_API_URL}/${baseSegment}`, event);
};

export const getEvent = async (id: string) => {
  return axios.get(`${process.env.REACT_APP_API_URL}/${baseSegment}/${id}`);
};

export const getUnsplashPhotos = async () => {
  return axios.get(
    `${process.env.REACT_APP_UNSPLASH_API_URL}/search/photos/?query=club&page=2&per_page=50`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_SECRET}`,
      },
    }
  );
};
