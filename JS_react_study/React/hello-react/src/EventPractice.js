import { Component } from 'react';

class EventPractice extends Component {
    state ={
        username: '',
        message:''
    }

    handleChance = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                type="text"
                name="username"
                placeholder="사용자명"
                value={this.state.username}
                onChange={this.handleChance}
                />
                <input
                type="text"
                name="message"
                placeholder="아무거나 입력해 보세요"
                value={this.state.message}
                onChange={this.handleChance}
                onKeyPress={this.handleKeyPress} // enter 누르면 클릭 메서드 호출
                />
                <button onClick = {this.handleClick}>확인</button>
                {/* 
                 onChange={
                    (e) => {
                        this.setState({
                        message : e.target.value
                    })
                }
            }
            />
            <button onClick={
                () => {
                    alert(this.state.message);
                    this.setState({
                        message: ''

                    });
                }
            }>확인</button> */} 
            </div>
        );
    }
}

export default EventPractice;