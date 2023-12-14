import './css/toduItems.css'
import Tick from './Assets/tick.png'
import Cross from './Assets/cross.png'
import Not_tick from './Assets/not_tick.png'

const TodoItems = ({no,display,text,setTodo}) => {

  const dellete = (no)=>{
    let Data = JSON.parse(localStorage.getItem('todo'));
    Data = Data.filter((todo)=> todo.no!==no);
    setTodo(Data)
  }
  
  const toggol = (no) =>{
    let data = JSON.parse(localStorage.getItem('todo'));
    for(let i=0; i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display===''){
          data[i].display = 'inline-through'
        }else{
          data[i].display = '';
        }
        break;
      }
    }
    setTodo(data)
  }

  return (
    <div className='todoItems'>
      <div className={`todoItems-container${display}`} onClick={()=>toggol(no)}>
        {display === '' ? <img src={Not_tick} alt="" /> : <img src={Tick} alt="" />}
        <div className="todoItems-text">{text}</div>
      </div>
      <img className='crossIcon' src={Cross} alt="" onClick={()=>{dellete(no)}} />
    </div>
  )
}

export default TodoItems