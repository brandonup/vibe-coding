import Section from '../components/Section';
import TextBox from '../components/TextBox';
const Instructions = () => {
  return (
    <Section title="Instructions">
      <TextBox
        id="instructions-textbox"
        label="Instructions"
        content="1) Create a Replit account.\n2) Decide on an MVP app idea.\n3) Write a short, 2-4 sentence summary of your MVP.\n4) On the “Prompt Examples” page, use the “Product Manager” example to create your first prompt. (Fill in the blanks)\n5) Enter this prompt into your chatbot to create your requirements. \n6) Go back to the “Prompt Examples” page and use the “Software Developer” example to create your second prompt. (fill in the blanks and paste in the requirements from the previous step).\n7) Enter this second prompt into your chatbot to create your final prompt.\n8) Open Repit, paste your prompt in the the chat window, and click “Start Building”.\n9) Approve the plan and wait for it to build your MVP. (1-5 minutes) \n10) Once complete, test your app and troubleshoot any bugs.\n11) If you have time, ask Replit to add one more very simple feature."
      />
    </Section>
  );
};

export default Instructions;
