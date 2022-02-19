import React from "react";

interface ISection {
  title: string, 
  children: React.ReactNode
  background: string
}

export default function Section({ title, children, background }: ISection) {
  return (
    <section className={`${background} section`}>
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  );
}