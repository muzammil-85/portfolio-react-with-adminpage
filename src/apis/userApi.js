import api from "./serverApi";

export const loginApi = (authData) => {
  return api.post("/login", authData);
};

export const addAboutApi = (experience) => {
  return api.post("/shared-basic/", experience);
};

export const getAboutApi = () => {
  return api.get("/shared-basic/");
};

export const deleteAboutApi = (experienceId) => {
  return api.delete(`/shared-basic/${experienceId}`);
};

export const updateAboutApi = (experienceId, experience) => {
  return api.put(`/shared-basic/${experienceId}`, experience);
};

