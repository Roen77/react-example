import { createContext, useMemo, useState } from "react";

type SearchProviderProps = {
  children: React.ReactNode;
};

type SearchActionsContextType = {
  onChange: (arg: string) => void;
};

export const SearchValueContext = createContext<string>("");
export const SearchActionsContext = createContext<
  undefined | SearchActionsContextType
>(undefined);

export const SearchProvider = ({ children }: SearchProviderProps) => {
  const [highlightValue, setHighlightValue] = useState("");

  const actions = useMemo(
    () => ({
      onChange(text: string) {
        setHighlightValue(text);
      },
    }),
    []
  );
  return (
    <SearchActionsContext.Provider value={actions}>
      <SearchValueContext.Provider value={highlightValue}>
        {children}
      </SearchValueContext.Provider>
    </SearchActionsContext.Provider>
  );
};
