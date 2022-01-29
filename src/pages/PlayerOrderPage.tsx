import { useNavigate, useLocation } from 'react-router-dom';

const PlayerOrderPage = (): JSX.Element => {

  // state passed to a route must be accessed using useLocation()
  // location.state contains form data passed to PlayerOrderPage by useNavigate() in PlayerForm
  // https://stackoverflow.com/questions/64566405/react-router-dom-v6-usenavigate-passing-value-to-another-component/64566486
  // https://v5.reactrouter.com/web/api/Hooks/uselocation
  const location = useLocation();
  const playerFormData = location.state.players;
  const navigate = useNavigate();

  // Fisher-Yates shuffle
  // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  const shuffle = (arr: Array<{ name: string }>) => {
    // comma syntax is called the js "single var pattern"
    // https://www.webfx.com/blog/web-design/single-var-pattern/
    
    // below is equivalent to:
    // let currentIndex = arr.length;
    // let randomIndex;
    let currentIndex = arr.length, randomIndex;

    // while there are elements left to shuffle
    while(currentIndex !== 0) {
      // pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // then swap it with the current element
      [arr[currentIndex], arr[randomIndex]] = [arr[randomIndex], arr[currentIndex]];
    }
    return arr;
  }

  let shuffledPlayers = shuffle(playerFormData);

  const alphabetizePlayers = (arr: Array<{ name: string }>) => {
    // grab value of each player object's name prop and push into a temp array
    let nameStringArray: string[] = [];
    arr.map(obj => {
      nameStringArray.push(obj.name);
      return nameStringArray;
    });
    
    // sort the temp array (default behavior is perfect for this use case)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    let alphabetizedStrings = nameStringArray.sort();

    // turn alphabetized string array back into an array of objects for use on Exchange page
    let alphabetizedObjects = alphabetizedStrings.map((name: string) => {
      let obj = {name: name}
      return obj
    })

    return alphabetizedObjects;
  }

  // call alphabetizeNames() with playerFormData (same data used in shuffle() for purposes of having a single source of truth)
  let alphabetizedPlayerObjects = alphabetizePlayers(playerFormData);

  // let alphaBackToObjArray = alphaBackToObj(alphabetizedNames);
  // console.log('alphaBackToObjArray: ', alphaBackToObjArray);
  

  return (
    <div className="w-full md:w-3/5 mx-auto max-h-screen overflow-auto">
       <div>
        <h1 className="text-2xl font-bold">It's go time!</h1>
        <p>Players will open gifts in the order shown below.</p>
        <p className="pb-4 md:pb-6">There's no need to memorize your number. We'll let you know when it's your turn.</p>
      </div>
      <div className="max-w-full flex flex-col h-80 px-6 pb-6 pt-4 overflow-auto border-2 border-gray">
        <h1 className="text-lg md:text-2xl">Player Order</h1>
        <div className="my-4">
          <ol className="list-decimal list-inside">
            {shuffledPlayers.map((obj: { name: string }) => {
              const playerName = obj.name;
              return (
                <li key={shuffledPlayers.indexOf(obj)}>{playerName}</li>
              )
            })}
          </ol>
        </div>
        
        <div className="flex justify-center md:justify-end mt-6">
          <button 
            onClick={() => navigate('/exchange', {state: alphabetizedPlayerObjects})}
            className='border-2 border-black px-2 rounded hover:bg-green-400'
          >
            Start Exchange
          </button>
        </div>
        
      </div>
    </div>
  )
}

export default PlayerOrderPage;
