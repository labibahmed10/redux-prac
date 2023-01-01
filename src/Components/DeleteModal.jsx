import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { openModal } from "../redux/action/manageBlogActionFunc";
import DELETE_CONTENT from "../redux/thunk_middleware/DELETE_CONTENT";

const DeleteModal = () => {
   const dispatch = useDispatch();
   const state = useSelector((state) => state.manage);

   const modal = () => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!",
      }).then((result) => {
         if (result.isConfirmed) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
         }

         if (result.isConfirmed) {
            dispatch(DELETE_CONTENT(state.blog));
            dispatch(openModal({}));
         }
         if (!result.isConfirmed) {
            dispatch(openModal({}));
         }
      });
   };

   return <>{modal()}</>;
};

export default DeleteModal;
