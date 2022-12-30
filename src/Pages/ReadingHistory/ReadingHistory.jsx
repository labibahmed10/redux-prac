import React from "react";
import {  useSelector } from "react-redux";

const ReadingHistory = () => {
   const sortedBlogs = useSelector((state) => state?.blogs?.blogs);

   console.log(sortedBlogs);

   return <div></div>;
};

export default ReadingHistory;
