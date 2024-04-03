import styles from "./About.module.css";

const peopleData = [
  {
    fullName: "Diego Fernandes",
    pictureUrl:
      "https://avatars.githubusercontent.com/u/125905114?s=400&u=2b10bb20fb316e872aa755e5fbfa2997342b9ce4&v=4",
    linkedInUrl: "https://www.linkedin.com/in/diego-fernandes-20/",
    githubUrl: "https://github.com/diego-fernandes",
  },
  {
    fullName: "Daniel-Ionut Rancea",
    pictureUrl:
      "https://media.licdn.com/dms/image/D4E03AQGDzk2z765akA/profile-displayphoto-shrink_800_800/0/1710354118843?e=1717632000&v=beta&t=SPx_px0v_nQTCmTJT09rJ9vPVXEF2KH9Sk2k_N4Obog",
    linkedInUrl: "https://www.linkedin.com/in/daniel-ionut-r-2640018a/",
    githubUrl: "https://github.com/johndaniell",
  },
  // Add more people as needed
];

const About = () => {
  return (
    <div className={styles.about}>
      <p>
        Admin dashboard for the apartment rental platform where the admin can
        see and manage the apartments shown on the platform.
      </p>
      <div className={styles.peopleContainer}>
        {peopleData.map((person, index) => (
          <div className={styles.personCard} key={index}>
            <h3>{person.fullName}</h3>
            <img
              src={person.pictureUrl}
              alt={person.fullName}
              className={styles.personImage}
            />
            <div>
              <a
                href={person.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="LinkedIn"
                  className={styles.socialIcon}
                />
              </a>
              <a
                href={person.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
                  alt="GitHub"
                  className={styles.socialIcon}
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
