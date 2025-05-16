import Section from '../components/Section';
import TextBox from '../components/TextBox';
const Notes = () => {
  return (
    <Section title="Notes">
      <TextBox
        id="notes-textbox"
        label="Notes"
        content=""
      />
    </Section>
  );
};

export default Notes;
