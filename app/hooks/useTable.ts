// import { useState } from "react";
// import { useInfiniteQuery } from "@tanstack/react-query";
// export type sortState<T> = {
//   key: keyof T | null;
//   order: "asc" | "desc";
// };

// function applySort<T>({ data, sort }: { data: T[]; sort: sortState<T> }) {
//   return [...data].sort((a, b) => {
//     const { key, order } = sort;
//     if (key == null) return 0;
//     const valueA = a[key];
//     const valueB = b[key];
//     if (valueA < valueB) {
//       return order === "asc" ? -1 : 1;
//     }
//     if (valueA > valueB) {
//       return order === "asc" ? 1 : -1;
//     }
//     return 0;
//   });
// }

// export function useTable<T>() {
//   const { data, fetchNextPage, hasNextPage, isPending } = useInfiniteQuery({
//     queryKey: ["projects"],
//     queryFn: () => {},
//     initialPageParam: 0,
//     getNextPageParam: (lastPage, pages) => lastPage.next,
//   });
//   const flatData = data?.pages.flatMap((page) => page.data) ?? [];

//   const [sortState, setSortState] = useState<sortState<T>>({
//     key: null,
//     order: "asc",
//   });

//   const sortedData = applySort<T>({ data: flatData, sort: sortState });

//   return {
//     sortedData,
//     setSortState,
//   };
// }

// /*
// // A conceptual look at your hook
// function useDataTable({ data, columns, initialPageSize = 10 }) {
//   const [sortState, setSortState] = useState({ key: null, direction: 'asc' });
//   const [page, setPage] = useState(1);
//   const [globalFilter, setGlobalFilter] = useState("");

//   // 1. Filter the data first
//   const filteredData = applyFilters(data, globalFilter);
  
//   // 2. Sort the filtered data
//   const sortedData = applySort(filteredData, sortState);
  
//   // 3. Paginate the sorted data
//   const paginatedData = applyPagination(sortedData, page, pageSize);

//   // Return the calculated data and the functions to mutate the state
//   return {
//     rows: paginatedData,
//     headers: generateHeaders(columns, sortState),
//     pagination: { page, totalPages, nextPage, prevPage },
//     setSortState,
//     setGlobalFilter
//   };
// }
// */
