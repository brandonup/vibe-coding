import Section from '../components/Section';
import TextBox from '../components/TextBox';
import content from '../content.json';

const Steps = () => {
  return (
    <Section title="Workshop Steps">
      {content.steps.map(item => (
        <TextBox
          key={item.id}
          id={item.id}
          label={item.label}
          content={item.content}
        />
      ))}
    </Section>
  );
};

export default Steps;
