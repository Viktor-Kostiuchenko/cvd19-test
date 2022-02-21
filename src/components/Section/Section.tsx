import React from "react";
import s from './Section.module.scss'

interface ISection {
  title: string, 
  children: React.ReactNode
  background: string
}

export default function Section({ title, children, background }: ISection) {
  return (
    <section className={`${s[background]} ${s.section}`}>
      <h2 className={s.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}