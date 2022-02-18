import React from "react";

interface ISection {
  title: string, 
  children: React.ReactNode
}

export default function Section({ title, children }: ISection) {
  return (
    <section className="section">
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </section>
  );
}