import api from "./serverApi";

export const addExperienceApi = (experience) => {
  return api.post("/experience/", experience);
};

export const getExperiencesApi = () => {
  return api.get("/experience/");
};

export const deleteExperienceApi = (experienceId) => {
  return api.delete(`/experience/${experienceId}`);
};

export const updateExperienceApi = (experienceId, experience) => {
  return api.put(`/experience/${experienceId}`, experience);
};
