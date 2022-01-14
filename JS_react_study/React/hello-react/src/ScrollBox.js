<<<<<<< HEAD
<<<<<<< HEAD
import { Component } from 'react';

class ScrollBox extends Component {
    
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }
        return (
            <div
            style={style}
            ref={(ref) => {this.box =ref}}>
                <div style={innerStyle}/>
                
            </div>
        );
    }
}

=======
import { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }
        return (
            <div
            style={style}
            ref={(ref) => {this.box =ref}}>
                <div style={innerStyle}/>
                
            </div>
        );
    }
}

>>>>>>> c5bd7ae621c4be49a836c60c59c3c1748182ecce
=======
import { Component } from 'react';

class ScrollBox extends Component {
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white,black)'
        }
        return (
            <div
            style={style}
            ref={(ref) => {this.box =ref}}>
                <div style={innerStyle}/>
                
            </div>
        );
    }
}

>>>>>>> c5bd7ae621c4be49a836c60c59c3c1748182ecce
export default ScrollBox;