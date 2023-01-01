import Swal from "sweetalert2";

const toast = (cond, message) => {
   console.log(cond);
   const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
         toast.addEventListener("mouseenter", Swal.stopTimer);
         toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
   });

   Toast.fire({
      icon: cond === true ? "success" : "error",
      title: message,
   });
};

export default toast;
