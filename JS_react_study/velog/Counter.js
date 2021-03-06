import { Component } from 'react';

class Counter extends Component {
state = {
    number: 0,
    fixedNumber: 0
};
    render() {
        const { number } = this.state; // state를 조회할 때는 this.state로 조회한다.
        return (
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button onClick={() => { 
                    this.setState(
                        {
                            number: number +1
                        },
                        () => {
                            console.log('방금 setState가 호출되었다.');
                            console.log(this.state);
                        }
                    );
                }}
                >
                    +1
                </button>
            </div>
        );
    }
}

export default Counter;