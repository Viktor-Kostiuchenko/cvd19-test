import aboutInfo from "../../data/infoAbout.json";
import Section from "../../components/Section";

export default function AboutView() {
  return (
    <Section title="How to get protected from virus infection?">
      <ul className="list">
        {aboutInfo.map(({ id, title, descr, path }) => (
          <li key={id}>
            <div className="itemNumber">
            <img src={path} alt="icon" width="25" height="25"/>
            </div>
            <h4 className="itemTitle">{title}</h4>
            <p className="itemDescr">{descr}</p>
          </li>
        ))}
      </ul>
    </Section>

  );
}
