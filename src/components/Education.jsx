import './Education.css';

const educationHistory = [
  {
    institution: 'Boston University',
    degree: 'MS in Computer Science, Specialization in Cybersecurity',
    date: 'Expected Graduation: Winter 2026',
    description: ''
  },
  {
    institution: 'BITS Pilani - KK Birla Goa Campus',
    degree: 'M.Sc. Mathematics and B.E. Mechanical Engineering',
    date: 'Aug 2017 - May 2022',
    description: ''
  },
  {
    institution: 'VSSC Central School',
    degree: 'Higher Secondary Certificate',
    date: 'April 2005 - March 2017',
    description: 'Best outgoing student (Male) award in 2017. Topper in Computer Science, Chemistry and Physics.'
  }
];

const Education = () => {
  return (
    <section id="education">
      <h2>Education</h2>
      <div className="education-grid">
        {educationHistory.map((edu, index) => (
          <div className="education-card" key={index}>
            <h3>{edu.institution}</h3>
            <p className="degree">{edu.degree}</p>
            <p className="date">{edu.date}</p>
            <p>{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
