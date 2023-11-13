import { ChangeEvent, useState, useTransition } from "react";
import { useSearchActions } from "../hooks/useContext";

function SearchInput() {
  const [text, setText] = useState("");
  const { onChange: onChangeHighlightValue } = useSearchActions();
  const [, startTransition] = useTransition();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    onChangeHighlightValue(e.target.value);
    startTransition(() => {
      onChangeHighlightValue(e.target.value);
    });
  };
  return (
    <div className="pt-10">
      {/* {isPending && <div className="text-lg">팬딩중..</div>} */}
      <label
        htmlFor="search"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        제목 검색
      </label>
      <input
        type="text"
        id="search"
        value={text}
        onChange={onChange}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="제목 하이라이트 처리 ex)woman"
      />
    </div>
  );
}

export default SearchInput;
