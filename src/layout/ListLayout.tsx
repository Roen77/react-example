import React from "react";

type Props = {
  children: React.ReactNode;
};
function ListLayout({ children }: Props) {
  return (
    <div className="max-w-7xl m-auto p-5">
      <div className="min-h-screen relative">{children}</div>
    </div>
  );
}

export default ListLayout;
