import Section from '../components/Section';
import TextBox from '../components/TextBox';
import content from '../content.json';

const ApiKeys = () => {
  return (
    <Section title="API Keys">
      {content.apiKeys.map(item => (
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

export default ApiKeys;
