import { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.input.focus(); //ref 설정 후 이 함수를 이용하여 다시 input으로 포커스를 줄 수 있음.
    }
    render() {
        return (
            <div>
                <input 
                ref={(ref) => this.input = ref}
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}

                />
                <button onClick = {this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;