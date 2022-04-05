import React,{useState} from 'react';

function Nav(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let t =props.topics[i]
        lis.push(<li key={t.id}>
        <a id={t.id} href={'/'+t.id} onClick={(event)=>{
            event.preventDefault();
            props.onChangeMode(Number(event.target.id)); 
        }}>{t.title}</a>
        </li>)
    }
    return <nav>
    <ol> 
        {lis}
    </ol>
</nav>
}
const onTest = (event) => {
	console.log(event.target);
    console.log(event.currentTarget);
    }
function Aaa(props) {
    console.log('props', props, props.title);
        return <header>
        <h1><a href='/' onClick={function(event){
            event.preventDefault(); // 기본 동작을 방지해준다. 클릭해도 reload가 되지 않게 해준다.
            props.onChangeMode();    
        }}
            >{props.title}</a></h1>
        </header>
}
function Article(props){
    return <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  }
  // onChange = 값을 입력할 때마다 호출된다.
  function Update(props){
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);
      return <article>
      <h2>Update</h2>
      <form onSubmit={(event) => {
          event.preventDefault(); 
        const title = event.target.title.value; 
        const body = event.target.body.value;  
        props.onUpdate(title, body);
      }}>
          <p><input type='text' name= 'title' placeholder='title' value={title} onChange={(event)=>{
              setTitle(event.target.value);
          }}/> </p> 
          <p><textarea name='body' placeholder='body' value={body} onChange={(event)=>{
              setTitle(event.target.value);
          }}></textarea></p> 
          <p><input type='submit' value='Update' /> </p> 
      </form>
  </article>
  }
  function Create(props){
      return <article>
          <h2>Create</h2>
          <form onSubmit={(event) => {
              event.preventDefault(); 
            //   페이지가 리로드 되지 않음.
            const title = event.target.title.value; // title의 value 값을 가져올 수 있다.
            const body = event.target.body.value; // title의 value 값을 가져올 수 있다. 
            props.onCreate(title, body);
          }}>
              <p><input type='text' name= 'title' placeholder='title' /> </p>
              {/* name은 사용자가 입력한 데이터의 이름이다. 
              placeholder는 어떤 정보를 입력하면 되는지를 알려준다. (힌트 개념) */}
              <p><textarea name='body' placeholder='body'></textarea></p>
              <p><input type='submit' value='Create'  /> </p> 
          </form>
      </article>
  }
function App() {
    // const _mode = useState{'WELCOME'};
    // const mode = _mode[0];
    // const setMode = _mode[1];
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const [nextId, setNextId] = useState(4);

    // usestate의 인자는 해당 state의 초기 값이다. state의 값은 0번째 인덱스로 읽는다. 바뀌는 값은 1번째 인덱스로 바뀐다.
    const [topics, setTopics] = useState([
        { id:1, title:'html', body:'html is ...' },
        { id:2, title:'css', body:'css is ...' },
        { id:3, title:'React', body:'React is ...' },
    ]);
    let content = null;
    let contextControl = null;
    if( mode === 'WELCOME'){
        content = <Article title = "Welcome" body="Hello, WEB"></Article>;
    }
    else if( mode === 'READ'){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Article title = {title} body={body}></Article>;
        contextControl = <>
        <li><a href={'/update/'+id} onClick={(event) =>{
            event.preventDefault();
            setMode('UPDATE');
        }}>Update</a></li>
        <li><input type="button" value ="Delete" onClick={()=>{
            const newTopics = []
            for(let i=0; i<topics.length; i++){
                if(topics[i].id !== id){
                    newTopics.push(topics[i]);
                }
            }
            setTopics(newTopics);
            setMode('WELCOME');
        }} />
        </>
    }
    else if(mode === "CREATE"){
        content = <Create onCreate={(_title, _body) =>{
            const newTopic = {id:nextId, title:_title, body:_body}
            const newTopics = [...topics] // topics를 복제한 복제본이 만들어진다.
            newTopics.push(newTopic); // 복제본에 push를 해서 변경시킨다.
            setTopics(newTopics); // 원본과 복제본이 같은지 다른지 판단하고 다르다면 그때 컴포넌트를 다시 렌더링 해준다. 
            setMode('READ');
            setId(nextId);
            setNextId(nextId+1);
        }}> </Create>
    }
    else if (mode === 'UPDATE'){
        let title, body = null;
        for(let i=0; i<topics.length; i++){
            if(topics[i].id === id){
                title = topics[i].title;
                body = topics[i].body;
            }
        }
        content = <Update title = {title} body = {body} onUpdate={(title, body)=>{
            const newTopics = [...topics]
            const updatedTopic = {id:id , title:title, body:body}
            for(let i=0; i<newTopics.length; i++){
                if(newTopics[i].id === id ){
                    newTopics[i] = updatedTopic;
                    break;
                }
            }
            setTopics(newTopics);
            setMode('READ');
            

        }}> </Update>
    }
    return (
        <div>
            <Aaa title="React" onChangeMode={()=>{
                setMode = 'WELCOME' //onChangeMode라고 하는 prop의 값으로 함수를 전달한다. 링크를 클릭하면 안에 있는 함수를 호출해서 안에 있는 alert가 실행이 된다.
            }}></Aaa>
            <Nav topics={topics}onChangeMode={(_id) => {
                setMode = 'READ';
                setId(_id);
            }}>
                 </Nav>
            {content}
            <ul>
            <li><a href='/create' onClick={(event) =>{
                event.preventDefault();//기본적인 동작을 못하게 하기 위해서 작성.
                setMode('CREATE');
            }}>Create</a></li>
            {contextControl}
            </ul>
        </div>
    );
}

export default App;