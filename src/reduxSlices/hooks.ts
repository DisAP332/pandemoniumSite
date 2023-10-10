import { RootState, useAppDispatch } from "@/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataStatus, getAllData, fetchData } from "@/reduxSlices/dataSlice";

// import { siteDataHandler } from "./dataSlice";

// export function useGetData() {
//   const dispatch = useAppDispatch();

//   const data = useSelector(getAllData);
//   const status = useSelector(getDataStatus);

//   useEffect(() => {
//     if (status === undefined) {
//       dispatch(fetchData());
//     }
//   }, [status, dispatch]);

//   console.log(data);

//   const isUninitialized = status === undefined;
//   const isLoading = status === "pending" || status === undefined;
//   const isError = status === "rejected";
//   const isSuccess = status === "fulfilled";

//   return { data, isUninitialized, isLoading, isError, isSuccess };
// }
