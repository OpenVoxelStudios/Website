import Radio from '../components/Radio';
import Select from '../components/Select';
import '../forms.css';

export default function BetaTest() {
  document.title = 'Beta Test Form - OpenVoxel Studios';

  return (
    <form className='Form' id='thatform' onSubmit={(data) => {
      data.preventDefault();
      data.stopPropagation();

      
    }}>

      <Select label='What Map do you want to Beta Test?' options={["Steve's 1k Soul Special", "BH", "The Backdoor", "Lethal Company 2.0"]} required={true} />

      <Radio label='Do you have a paid Minecraft Java account?' options={["Yes I do", "No I don't"]} required={true} />

      <Radio label='Do you have a Microphone?' options={["Yes I do, and I'm ok with speaking", "Yes I do, but I'd rather not speak", "No I don't"]} required={true} />



      {/* 
      <input type="text" placeholder="What makes you a good candidate for beta testing?" {("What makes you a good candidate for beta testing?", { required: true, maxLength: 500 })} />

      <input type="text" placeholder="What's your experience with beta-testing?" {("What's your experience with beta-testing?", { required: true, maxLength: 500 })} />

      <input {("Join our Discord first! -> https://discord.gg/Xhvb2wujVh", { required: true })} type="radio" value="Done!" /> */}

      <input type="submit" />
    </form>
  );
}