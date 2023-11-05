import { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

type Props = {
  title: string;
  onKeyup: (arg: KeyboardEvent<HTMLInputElement>) => void;
};

function TitleInput({ title, onKeyup }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState(title);
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <input
      ref={inputRef}
      value={text}
      maxLength={150}
      type="text"
      onChange={onChange}
      onKeyUp={onKeyup}
    />
  );
}

export default TitleInput;
