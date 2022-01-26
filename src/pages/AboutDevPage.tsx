import Emoji from '../components/Emoji';

type AboutDevPageProps = {
  aProp?: boolean;
}

const AboutDevPage = ({
  aProp
}: AboutDevPageProps): JSX.Element => {
  return (
    <div className="w-full md:w-3/5 mx-auto max-h-screen overflow-auto">
      <h1 className="text-2xl font-bold">About the Developer</h1>
      <p>Hi there! <Emoji label='waving hand emoji' symbol='👋🏼'/></p>
      <p>Thanks for checking out VWE.</p>

      <div className="mt-6">
        <div>
          <h2 className="font-bold">Brief professional background <Emoji label='laptop emoji' symbol='💻'/></h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aut nobis doloremque, aliquid eum at tempore, vero sapiente ducimus atque cumque, autem obcaecati asperiores mollitia culpa deleniti beatae quae non.</p>
        </div>
        
        <div className="mt-6">
          <h2 className="font-bold">Why I created VWE <Emoji label='thinking face emoji' symbol='🤔'/></h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aut nobis doloremque, aliquid eum at tempore, vero sapiente ducimus atque cumque, autem obcaecati asperiores mollitia culpa deleniti beatae quae non.</p>
        </div>

        <div className="mt-6">
          <h2 className="font-bold">When I'm not coding, I like to... <Emoji label='cooking emoji' symbol='🍳'/></h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum aut nobis doloremque, aliquid eum at tempore, vero sapiente ducimus atque cumque, autem obcaecati asperiores mollitia culpa deleniti beatae quae non.</p>
        </div>

        <div className="mt-6">
          <h2 className="font-bold">Let's connect <Emoji label='handshake emoji' symbol='🤝'/></h2>
          <p><a href="https://github.com/kaymay1000" className="underline hover:text-green-400">Follow me on Github</a> to keep up with my latest projects.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutDevPage;
