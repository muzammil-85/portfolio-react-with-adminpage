import {
    addAboutApi,
    getAboutApi,
    deleteAboutApi,
    updateAboutApi,
  } from "../apis/userApi";
  import { toastSuccess, toastError } from "../shared/toast";
  
  export const getAbout = () => async (dispatch) => {
    try {
      const { data } = await getAboutApi();
      dispatch({ type: "GET_ABOUT", payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
  export const addAbout = (experience) => async (dispatch) => {
    try {
      const { data } = await addAboutApi(experience);
      dispatch({ type: "ADD_ABOUT", payload: data });
      toastSuccess("About Added Successfully");
    } catch (error) {
      console.log(error);
      toastError("Error while adding About");
    }
  };
  
  export const deleteAbout = (id) => async (dispatch) => {
    try {
      await deleteAboutApi(id);
      dispatch({ type: "DELETE_DELETE", payload: id });
      toastSuccess("About deleted Successfully");
    } catch (error) {
      console.log(error);
      toastError("Error while deleting About");
    }
  };
  
  export const updateAbout = (id, experience) => async (dispatch) => {
    try {
      const { data } = await updateAboutApi(id, experience);
      dispatch({
        type: "UPDATE_ABOUT",
        payload:{...experience,_id: data.experience._id},
      });
      toastSuccess("About Updated Successfully");
    } catch (error) {
      console.log(error);
      toastError("Error while updating About");
    }
  };
  