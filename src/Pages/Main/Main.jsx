import React from "react";
import { useSelector } from "react-redux";

const Main = () => {
   const { test } = useSelector((state) => state.blogs);
   //    console.log(state);
   return <section>{test}</section>;
};

export default Main;
