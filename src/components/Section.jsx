/**
 * Wrapper component for consistent section spacing and styling
 * @param {string} title - Section title
 * @param {React.ReactNode} children - Section content
 */
const Section = ({ title, children }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <div className="section-content">{children}</div>
    </section>
  );
};

export default Section;
