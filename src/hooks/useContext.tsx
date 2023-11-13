import { useContext } from "react";
import {
  SearchActionsContext,
  SearchValueContext,
} from "../contexts/SearchProvider";

export const useSearchValue = () => {
  const value = useContext(SearchValueContext);
  if (value === undefined) {
    throw new Error("useSearchValue value is undefined");
  }
  return value;
};

export const useSearchActions = () => {
  const value = useContext(SearchActionsContext);
  if (value === undefined) {
    throw new Error("useSearchActions value is undefined");
  }
  return value;
};
