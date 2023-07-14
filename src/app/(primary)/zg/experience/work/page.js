const WorkExperience = () => {
  return (
    <table className="border-none text-black">
      <thead>
        <tr>
          <th className="border border-none">
            <h4 className="text-center font-normal">
              <span className="text-gradient border-style-one ">Job</span>{" "}
              Experience
            </h4>
          </th>
          <th className="border-none font-light">Tenure</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-white">
        <tr>
          <td className="border border-none pr-4...">
            Crocodile Wine - Wine Sales Specialist
          </td>
          <td className="border border-none ...">2021-present</td>
        </tr>
        <tr>
          <td className="border border-none pr-4 ...">
            Windsor Boutique Hotel - Hotel Concierge
          </td>
          <td className="border border-none ...">2020-present</td>
        </tr>
        <tr>
          <td className="border border-none pr-4...">Wine Sales Specialist</td>
          <td className="border border-none ..">2018-present</td>
        </tr>
        <tr>
          <td className="border border-none pr-4...">
            Bottle Riot - Bartender
          </td>
          <td className="border border-none ...">2017-2019</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WorkExperience;
