import PortfolioNavLink from "@/app/components/PortfolioNavLink";

const PortfolioLayout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <aside className="flex-[2]">
        <nav>
          <ul className="grid gap-3">
            <li>
              <PortfolioNavLink href="/dashboard/projects">
                Projects
              </PortfolioNavLink>
            </li>
          </ul>
        </nav>
      </aside>
      <div className="bg-gray-100 flex-[8] p-4 rounded min-h-[300px]">
        {children}
      </div>
    </div>
  );
};

export default PortfolioLayout;
