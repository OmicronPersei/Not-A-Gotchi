import React from 'react';

class App extends React.Component
{
    render(){
        return (
                <div>
                    <h1>Hello World2</h1>
                    <NavBar/>
                    <Image/>
                </div>
            );
    }
}

class NavBar extends React.Component
{
    render(){
        return (<div class="orange">
            <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
            </ul>
            </div>);
    }
}

class Image extends React.Component
{
    render(){
        return (
            <img src="https://images.pexels.com/photos/2124696/pexels-photo-2124696.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Some Random Place"></img>
        )
    }
}


export default App;