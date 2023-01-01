const UPDATE_CONTENT = (blog) => {
   console.log(blog);
   return async (dispatch, getState) => {
      const res = await fetch(`http://localhost:8000/api/update/${blog?._id}`, {
         method: "PATCH",
         body: JSON.stringify(blog),
         headers: {
            "Content-type": "application/json",
         },
      });
      const data = await res.json();
      console.log(data);
   };
};

export default UPDATE_CONTENT;
