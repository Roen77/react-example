import { useEffect, useRef } from "react";

type Props = {
  fetchMoreList: () => void;
  isFetchingNextPage: boolean;
};
function ListMore({ fetchMoreList, isFetchingNextPage }: Props) {
  const moreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          fetchMoreList();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.3,
      }
    );

    const target = moreRef.current as HTMLDivElement;

    io.observe(target);

    return () => {
      io.unobserve(target);
    };
  }, [fetchMoreList]);
  return (
    <div
      ref={moreRef}
      className={`absolute w-full text-center ${
        isFetchingNextPage ? "h-7 opacity-1" : "h-0 opacity-0"
      } bg-rose-300`}
    >
      로딩중..
    </div>
  );
}

export default ListMore;
