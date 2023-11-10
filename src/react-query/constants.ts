export const productKeys = {
  getAll: ["products"],
};

export const searchKeys = {
  all: ["search"] as const,
  searchKeyword: (keyword = "") => [...searchKeys.all, { keyword }] as const,
};
