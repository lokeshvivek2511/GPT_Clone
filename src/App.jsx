import { useState,useRef ,useEffect} from 'react'
import './App.css'

import gptlogo from './assets/chatgpt.svg'
import addbtn from './assets/add-30.png'
import msgicon from './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import update from './assets/rocket.svg'
import sendbtn from './assets/send.svg'
import cat1 from './assets/cat3.jpg'
// import chatgptlogo from './assets/chatgptlogo.svg'
// import usericon from './assets/user-icon.png'
import cat2 from './assets/cat5.jpg'
import opener from './assets/opener2.svg'
import close from './assets/close2.svg'

import { runChat } from './Openai.js'

function App() {
      const msgEnd=useRef(null);
      const api1="AIzaSyDtYPc1UfnrwpkDKrKGsDMO6uvtJTslfhg";
      const api2="AIzaSyAg5No0WKjRM2kXZ3Uzpb3fmsM5XZqV0hg";
      const [api,setApi]=useState(api1)
      const [input,setInput] = useState("");
      const [isLoading,setloading]=useState(false);
      const [history,setHistory]=useState([]);
      const [side,setSide]=useState(true);
      const [error,setError]=useState(false);
      let his=[...history].reverse()
      const [messages,setMessages]=useState([{
              text:"Hi, I am GPT, a state-of-the-art language model developed by Lokesh",
              isBot:true
            }]);

      

      const handleSend = async () => {
        try {
          setError(false); // Reset error 
          setMessages(m => [...m, { text: input, isBot: false }]);
          setloading(true);
          setInput("");
          
          const res = await runChat(input, history,api);
          // console.log(res);
      
          setHistory(h => [...h, {
            role: "user",
            parts: [{ text: input }],
          }, {
            role: "model",
            parts: [{ text: res }],
          }]);
      
          // console.log(history);
          let resarr = res.split('**');
          let newres = "";
          for (let i = 0; i < resarr.length; i++) {
            if (i === 0 || i % 2 !== 1) {
              newres += resarr[i];
            } else {
              newres += "<b>" + resarr[i] + "</b>";
            }
          }
          let finalres = newres.split('*').join("</br>");
          let finalres1 = finalres.split('\n').join("</br>");
          finalres = finalres1.split('</br></br>').join("</br>");
          setMessages(m => [...m, { text: finalres, isBot: true }]);
      
          setloading(false);
        } catch (error) {
          console.error('Error in handleSend:', error);
          setError(true);
          setloading(false);
          setApi(a=>a=(a==api1)?api2:api1);
          handleSend()
        }
      }
      



          useEffect(()=>{
            msgEnd.current.scrollIntoView();
            },[messages])

        
          const handleEnter = async (e) => {
            if (e.key =='Enter') {
              await handleSend();
              }
          }

  return (
      <div className="App">
        <div className={!side?"close":"opener"} title={!side?"close":"open"} onClick={()=>setSide(s=>s=!s)}><img src={!side?close:opener} alt="" /></div>
        { !side && <div className="Sidebar">
          <div className="upperbar">
              <div className="uppertop"><img src={gptlogo} alt="" className="logo" /><span className="brand">CHAT GPT</span></div>
              <button className="midbutton" title='It will creat a new chat' onClick={()=>window.location.reload()}><img src={addbtn} alt="" className="addbutton" />New Chat</button>
              <div className="uppersidebottom">

                {his.map((ele,i)=>
                    (<button  key={i} className={ele.role=="user"?"query":"none"} value={ele.parts[0].text} onClick={(e)=>{setInput(i=>i=e.target.value);setSide(s=>s=!s) }} ><img src={msgicon} alt="" /> {ele.parts[0].text}</button>) 
      
                )}
                <button className="query" value="What is react?" onClick={(e)=>{setInput(i=>i=e.target.value);}}><img src={msgicon} alt="" /> What is react?</button>
                <button className="query" value="Tell me a Joke." onClick={(e)=>{setInput(i=>i=e.target.value);}}><img src={msgicon} alt="" /> Tell me a Joke.</button>
                

              </div>


          </div>
          <div className="lowerbar">
                  <div className="listitem" title='Still not developed'><img src={home} alt="" className="listitemimg"  />Home</div>
                  <div className="listitem" title='Still not developed'><img src={saved} alt="" className="listitemimg"  />Saved</div>
                  <div className="listitem" title='Still not developed'><img src={update} alt="" className="listitemimg"  />Upgrade to pro</div>
          </div>
        </div>}
        <div className="main">
            <div className="chats">
                  {/* <div className="chat">
                    <img src={usericon} className='chatimg' alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi temporibus quidem quaerat quasi nesciunt quibusdam hic soluta nam quisquam enim.</p>
                  </div>
                  <div className="chat bot">
                    <img src={chatgptlogo} className='chatimg' alt="" /><p className="txt">Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque veniam quibusdam, possimus delectus quia ipsa quos minus unde recusandae ut laboriosam numquam velit, sint iure vitae. Dolorem ipsa illum officiis sequi sunt quis pariatur reprehenderit libero quasi nulla, inventore ullam aliquid veritatis totam! Temporibus nisi, nihil voluptates inventore corporis provident! Sit, ullam velit. Laboriosam eos aspernatur, nobis facere adipisci, eligendi enim libero quos reprehenderit ea magnam sit, totam natus fuga laborum ut modi cupiditate non asperiores in! Exercitationem, possimus architecto! ipsum dolor sit amet consectetur, adipisicing elit. Excepturi temporibus quidem quaerat quasi nesciunt quibusdam hic soluta nam quisquam enim.</p>
                  </div> */}
                  {messages.map((ele,i)=>
                    <div key={i} className={!ele.isBot?"chat":(i==(messages.length-1)?"chat last":"chat bot") }>
                      <img src={ele.isBot?cat1:cat2} className='chatimg' alt=""  /><p className="txt" dangerouslySetInnerHTML={{__html:ele.text}}></p>
                    </div>

                  )}
                  {isLoading && (<div className='loader'>
                    <hr />
                    <hr />
                    <hr />
                  </div> )}
                  {error && (<div className='Error'>⚠️The model is overloaded plz try again*
                  </div> )}

                  <div ref={msgEnd}></div>
            </div>

            <div className="chatFooter">
                <div className="inp">
                  <input type="text" value={input} onKeyDown={handleEnter} onChange={(e)=>setInput(e.target.value)} placeholder='Send a message'/> <button className="send" onClick={handleSend}><img src={sendbtn} alt="" /></button> 
                </div>
                <p>If you find any difficulties feel free to contact 'lokeshvlw2004@gmail.com'</p>

            </div>
        </div>
      </div> 
  )
}

export default App
