import { Link } from "react-router-dom";

type Props = {
  title: React.ReactNode;
  href: string;
};

function Card({ title, href }: Props) {
  return (
    <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow mb-5">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <Link
        to={href}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
      >
        페이지 이동
      </Link>
    </div>
  );
}

export default Card;
