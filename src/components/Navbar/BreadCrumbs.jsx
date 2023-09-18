import { Breadcrumbs } from "@material-tailwind/react";
import { useLocation, Link } from "react-router-dom";

export default function BreadcrumbsWithIcon() {
  const location = useLocation();
  const path = location.pathname.split("/").filter((x) => x);
  const paths = path.map((x, i) => {
    const to = `${path.slice(0, i + 1)}`;
    return { to, label: x };
  });

  return (
    <Breadcrumbs
      color="gray"
      separator="/"
      className="text-sm font-medium text-blue-gray-500 transition-none"
    >
      <Link to="/" className="hover:text-primary transition-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      </Link>
      {paths.map(({ to, label }) => (
        <a href="" key={to}>
          <span className="text-sm font-medium text-blue-gray-500 transition-none">
            {label}
          </span>
        </a>
      ))}
    </Breadcrumbs>
  );
}
