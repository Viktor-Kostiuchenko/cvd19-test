import aboutInfo from '../../data/infoAbout.json';
import Section from '../../components/Section';
import s from './AboutView.module.scss'

export default function AboutView() {
  return (
    <Section
      title="How to get protected from virus infection?"
      background="about"
    >
      <ul className={s.list}>
        {aboutInfo.map(({ id, title, descr, path }) => (
          <li key={id}>
            <div className={s.itemNumber}>
              <img src={path} alt="icon" width="25" height="25" />
            </div>
            <h4 className={s.itemTitle}>{title}</h4>
            <p className={s.itemDescr}>{descr}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
