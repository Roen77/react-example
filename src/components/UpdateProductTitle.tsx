import { ChangeEvent, useEffect, useRef, useState } from "react";
import UpdateButton from "./UpdateButton";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productsApi } from "../api/products";
import { productKeys } from "../react-query/constants";
type Props = {
  title: string;
  id: number;
};

function UpdateProductTitle({ title, id }: Props) {
  const queryClient = useQueryClient();
  // update
  const updateTitleMutation = useMutation(productsApi.updateProductTitle, {
    onSuccess() {
      queryClient.invalidateQueries(productKeys.getAll);
    },
  });

  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(title);
  const [isClickedUpdateButton, setIsClickedUpdateButton] = useState(false);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const updateTitle = () => {
    if (!isClickedUpdateButton && title.trim() === text.trim()) return;
    updateTitleMutation.mutate({ id, title: text.trim() });
  };

  const onClickUpdateButtonToggle = () => {
    updateTitle();
    setIsClickedUpdateButton((prev) => !prev);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="update-item">
      <UpdateButton
        onClick={onClickUpdateButtonToggle}
        isClickedUpdateButton={isClickedUpdateButton}
      />
      {isClickedUpdateButton && (
        <input
          ref={inputRef}
          value={text}
          maxLength={150}
          type="text"
          onChange={onChange}
        />
      )}
    </div>
  );
}

export default UpdateProductTitle;
