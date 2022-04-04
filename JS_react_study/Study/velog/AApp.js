import React from 'react';


function Nav(props) {
    const lis = []
    for(let i=0; i<props.topics.length; i++){
        let t =props.topics[i]
        lis.push(<li key={t.id}><a href={'/'+t.id}>{t.title}</a></li>)
    }
        return <nav>
            <ol> 
                {lis}
            </ol>
        </nav>
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
function App() {
    const topics =[
        { id:1, title:'html', body:'html is ...' },
        { id:2, title:'css', body:'css is ...' },
        { id:3, title:'React', body:'React is ...' },
    ]
    return (
        <div>
            <Aaa title="React" onChangeMode={function(){
                alert('Header'); //onChangeMode라고 하는 prop의 값으로 함수를 전달한다. 링크를 클릭하면 안에 있는 함수를 호출해서 안에 있는 alert가 실행이 된다.
            }}></Aaa>
            <Nav topics={topics}> </Nav>
        </div>
    );
}

export default App;