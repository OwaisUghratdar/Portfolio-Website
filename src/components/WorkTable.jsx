import icon from "../assets/samaha_icon.JPG";

const people = [
  {
    name: "Frontend Developer @ Checkpoint Systems",
    point1:
      "• Work with UI/UX team to create and maintain responsive, sleek user interfaces for multiple ecommerce websites, using HTML, CSS, and JS to ensure a smooth, bug-free experience.",
    point2:
      "• Develop server-side functionality using PHP and XML, coordinating with the backend team to implement site features, API integrations, and optimize plugin performance.",
    point3:
      "• Launch, upgrade, and maintain high-traffic e-commerce websites processing millions in annual revenue, ensuring optimal performance and seamless user experience for thousands of daily visitors.",
    point4:
      "• Manage and optimize SQL queries for large-scale databases containing millions of records across products, customers, and orders, ensuring efficient data retrieval and system performance.",
    point5:
      "• Contribute significantly to technical improvements by implementing new solutions and frameworks, while collaboratively solving complex challenges across frontend architecture, database optimization, and system security.",
    role: "Nov 2023 - Current",
    imageUrl: require("../assets/checkpoint_systems_logo.jpg"),
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Software Engineer @ Samaha",
    point1:
      "• Played a pivotal role in advancing a highly efficient pipeline, resulting in a remarkable 60% reduction in website development time and the realization of rapid, polished UI creation.",
    point2:
      "• Helped to harmonize the process between front-end and back-end of technologies like React.JS, Astro, Headless CMS, AWS, and more to ensure robust and efficient delivery of websites.",
    point3:
      "• Created sleek frontend designs for diverse client websites using HTML, Tailwind CSS, React.js, Next.js, and Astro.js.",
    point4:
      "• Collaborated with UI team to seamlessly integrate design elements and ensure frontend-backend compatibility.",
    point5:
      "• Assisted in selecting and implementing backend architecture, optimizing website performance and sustainability.",
    point6:
      "• Orchestrated AWS hosting for static servers and integrated with a headless CMS, enhancing content management.",
    point7:
      "• Integrated MongoDB server, enabling efficient storage and retrieval of dynamic content elements.",
    role: "Jan 2023 - Nov 2023",
    imageUrl: require("../assets/samaha_icon.JPG"),
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Software Developer Intern @ Riipen",
    point1:
      "• Worked with clients in different capacities to understand their business and technology needs.",
    point2:
      "• Designed, prototyped, and built web-apps using WordPress, HTML, CSS, JavaScript, React and more.",
    point3:
      "• Gained experience in web-development, UI design, system automation, web-consulting.",
    point4:
      "• Designed and developed backend APIs for CRUD operations. Served JSON to frontend.",
    point5:
      "• Wrote unit and integration tests with implemented features to prevent issues, resulting in reduced bugs.",
    point6:
      "• Worked in a Linux environment and learned to navigate large codebases and investigate code changes.",
    role: "Jan 2022 - Dec 2022",
    imageUrl: require("../assets/riipen_logo.png"),
    lastSeen: "3h ago",
    lastSeenDateTime: "2023-01-23T13:23Z",
  },
  {
    name: "Coding Curriculum Lead @ Camp Tournesol",
    point1:
      "• Built a robust coding curriculum which consists of projects and engaging PowerPoints.",
    point2:
      "• Build coding curriculum and projects using Python, HTML, CSS, JavaScript, and Scratch.",
    point3:
      "• Taught coding courses to students and explained complex concepts according to their understanding.",
    role: "Feb 2021 - July 2021",
    imageUrl: require("../assets/camp_logo.png"),
    lastSeen: "3h ago",
  },
];

export default function WorkTable() {
  return (
    <ul role="list" className="divide-y divide-gray-800">
      {people.map((person, index) => (
        <li key={index} className="flex justify-between gap-x-6 py-5">
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
              {[person.point1, person.point2, person.point3, person.point4, person.point5, person.point6, person.point7]
                .filter(Boolean)
                .map((point, idx) => (
                  <p
                    key={idx}
                    className="mt-1 text-xs leading-5 text-gray-300"
                  >
                    {point}
                  </p>
                ))}
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-col sm:items-end">
            <p className="text-sm leading-6 text-white">{person.role}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
