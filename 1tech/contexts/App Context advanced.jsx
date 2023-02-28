
const data =[{id:0,name:"koko"}, 
{id:1,name:"Marzok"},
{id:2,name:"Toska"}
]



export default function Main() {
    
    return(
    <TextContextProvider>
        <List />
            </TextContextProvider>
    )
}


    const TextContext = React.createContext(null)




function TextContextProvider({children}) {
    const [text, setText] = React.useState("")
    

    return(
    <TextContext.Provider value={[text,setText]}>
        
            {children}
        
        
    </TextContext.Provider>
    
    
    )

}
    

function useText() {
  const [text, setText] = React.useContext(TextContext);
console.log(text)
  const handleText = (value) => {
    setText(value);
  };

  return { value: text, onChange: handleText };
};


function List() {

const {onChange} = useText();
const {value:text} = useText()

    return(
    <>
        <input type="text" value={text} onChange={(e)=>onChange(e.target.value)} placeHolder="Add To List..."/>
        <button >Add </button>
            <ul> 
            {data.map(d=><li key={d.id}>{d.name}</li>)}
            </ul>
            </>
    )
}




