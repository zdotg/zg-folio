const AcademicExperience = () => {
  return (
    <table className="border border-none text-black">
      <thead>
        <tr>
          <th className="border border-none px-3">
            <h4 className="text-center font-normal">
              <span className="text-gradient border-style-one">Academic</span>{" "}
              Qualifications
            </h4>
          </th>
          <th className="border border-none px-3 font-light">Graduated</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white pt-3">
        <tr>
          <td className="border border-none px-3...">
            NuCamp&apos;s Full Stack Mobile and Web Development Bootcamp
          </td>
          <td className="border border-none px-3 ...">May 2023</td>
        </tr>
        <tr>
          <td className="border border-none px-3 ...">
            B.S. from The University of Montevallo
          </td>
          <td className="border border-none px-3 ...">May 2013</td>
        </tr>
      </tbody>
    </table>
  );
};

export default AcademicExperience;
