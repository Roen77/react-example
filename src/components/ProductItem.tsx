import React, { useMemo } from "react";
import { Product } from "../types/products";
import { useSearchValue } from "../hooks/useContext";

type Props = {
  item: Product;
};
// 추가로 불러오는 item만 리랜더링하기 위해 memo 처리
const MemoProductItem = React.memo(function ProductItem({ item }: Props) {
  console.log("item id:", item.id);

  const highlightValue = useSearchValue();
  const index = useMemo(
    () => item.title.toLocaleLowerCase().indexOf(highlightValue.toLowerCase()),
    [highlightValue, item.title]
  );

  return (
    <div className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 my-10">
      <svg
        className="w-7 h-7 text-gray-500 dark:text-gray-400 mb-3"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
      </svg>
      <div>
        <span>{item.category}</span>
      </div>
      <div className="md:flex-row flex-col flex py-5">
        <div className="flex justify-center items-center md:pr-10 pr-0">
          <img className="rounded-t-lg w-40 h-auto " src={item.image} />
        </div>
        <div>
          <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {index === -1 ? (
              item.title
            ) : (
              <>
                {item.title.slice(0, index)}
                <span className="bg-blue-400">
                  {item.title.slice(index, index + highlightValue.length)}
                </span>
                {item.title.slice(index + highlightValue.length)}
              </>
            )}
          </h5>

          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {item.description}
          </p>
          <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
            {item.price}
          </p>
        </div>
      </div>
    </div>
  );
});

export default MemoProductItem;
