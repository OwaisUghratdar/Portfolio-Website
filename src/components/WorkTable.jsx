import icon from "../assets/samaha_icon.JPG";

const people = [
  {
    name: "Software Engineer at Samaha",
    point1:
      "•	Played a pivotal role in advancing a highly efficient pipeline, resulting in a remarkable 60% reduction in website ",
    point15: (
      <pre className="font-raleway">
        {" "}
        development time and the realization of rapid, polished UI creation.{" "}
      </pre>
    ),
    point2:
      "•	Helped to harmonize the process between front-end and back-end of technologies like React.JS, Astro, Headless CMS,",
    point25: (
      <pre className="font-raleway">
        {" "}
        AWS, and more to ensure robust and efficient delivery of websites.
      </pre>
    ),
    point3:
      "•	Created sleek frontend designs for diverse client websites using HTML, Tailwind CSS, React.js, Next.js, and Astro.js.",
    point4:
      "•	Collaborated with UI team to seamlessly integrate design elements and ensure frontend-backend compatibility.",
    point5:
      "•	Assisted in selecting and implementing backend architecture, optimizing website performance and sustainability.",
    point6:
      "•	Orchestrated AWS hosting for static servers and integrated with a headless CMS, enhancing content management.",
    point7:
      "•	Integrated MongoDB server, enabling efficient storage and retrieval of dynamic content elements.",

    role: "Jan 2023 - Aug 2023",
    imageUrl: require("../assets/samaha_icon.JPG"),
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Application Developer Intern @ Riipen",
    point1:
      "•	Designed and developed backend APIs for CRUD operations. Served JSON to frontend.",
    point2:
      "•	Wrote unit and integration tests with implemented features to prevent issues, resulting in reduced bugs.",
    point3:
      "•	Worked in a Linux environment and learned to navigate large codebases and investigate code changes.",
    role: "Sep 2022 - Dec 2022",
    imageUrl: require("../assets/riipen_logo.png"),
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Software Developer Intern @ Riipen",
    point1:
      "•	Worked with clients in different capacities to understand their business and technology needs.  ",
    point2:
      "•	Designed, prototyped, and built web-apps using WordPress, HTML, CSS, JavaScript, React and more.",
    point3:
      "•	Gained experience in web-development, UI design, system automation, web-consulting.",
    role: "Mar 2022 - Aug 2022",
    imageUrl: require("../assets/riipen_logo.png"),
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Coding Curriculum Lead @ Camp Tournesol",
    point1:
      "•	Built a robust coding curriculum which consists of projects and engaging PowerPoints.",
    point2:
      "•	Build coding curriculum and projects using Python, HTML, CSS, JavaScript, and Scratch.",
    point25: "•	Trained instructors to ensure exceptional course delivery.",
    point3:
      "•	Taught coding courses to students and explained complex concepts according to their understanding.",
    email: "dries.vincent@example.com",
    role: "Feb 2021 - July 2021",
    imageUrl: require("../assets/camp_logo.png"),
    lastSeen: "3h ago",
  },
];

export default function WorkTable() {
  return (
    <ul role="list" className="divide-y divide-gray-800">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex gap-x-4">
            <img
              className="h-12 w-12 flex-none rounded-full bg-gray-800"
              src={person.imageUrl}
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-white">
                {person.name}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point1}
              </p>
              {person.point15 ? (
                <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                  {person.point15}
                </p>
              ) : (
                <div className=" flex items-center">
                  <p className=""></p>
                </div>
              )}

              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point2}
              </p>

              {person.point25 ? (
                <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                  {person.point25}
                </p>
              ) : (
                <div className=" flex items-center">
                  <p className=""></p>
                </div>
              )}

              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point3}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point4}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point5}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point6}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-300">
                {person.point7}
              </p>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white">{person.role}</p>
            {/* {person.lastSeen ? (
                <p className="mt-1 text-xs leading-5 text-gray-400">
                  Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
                </p>
              ) : (
                <div className="mt-1 flex items-center gap-x-1.5">
                  <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  </div>
                  <p className="text-xs leading-5 text-gray-400">Online</p>
                </div>
              )} */}
          </div>
        </li>
      ))}
    </ul>
  );
}
