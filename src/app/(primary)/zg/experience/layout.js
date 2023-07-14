import ExperienceNavLink from "@/app/components/ExperienceNavLink";

const ExperienceLayout = ({ children }) => {
  return (
    <div className="flex gap-8">
      <aside className="flex-[2]">
        <nav>
          <ul className="grid gap-3">
            <li>
              <ExperienceNavLink href="/zg/experience/academic">
                Academic
              </ExperienceNavLink>
            </li>
            <li>
              <ExperienceNavLink href="/zg/experience/work">
                Work
              </ExperienceNavLink>
            </li>
            <li>
              <ExperienceNavLink href="/zg/experience/certificates">
                Certificates
              </ExperienceNavLink>
            </li>
            <li>
              <ExperienceNavLink href="/zg/experience/skills">
                Skills
              </ExperienceNavLink>
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

export default ExperienceLayout;
