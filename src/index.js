import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';

// base url
const api = {
    base_url: 'https://api.chucknorris.io/jokes/random?category',
};

class Animal extends React.Component {
    state = { categories: [] };

    // get categories
    componentDidMount() {
        fetch('https://api.chucknorris.io/jokes/categories')
            .then(res => res.json())
            .then((data) => {
                this.setState({ categories: data })
            })
            .catch(console.log)
    }

    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getAnimal = this.getAnimal.bind(this);
    }

    getAnimal() {
        axios.get(`${api.base_url}=animal`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            // <p>{this.state.categories}</p>
            <div className="container text-center">
                <h2>Animal Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getAnimal}>
                    More Animal Chuck Facts!
                </button>
            </div>
        );
    }
}

class Career extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getCareer = this.getCareer.bind(this);
    }

    getCareer() {
        axios.get(`${api.base_url}=career`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Career Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getCareer}>
                    More Career Chuck Facts!
                </button>
            </div>
        );
    }
}

class Celebrity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getCelebrity = this.getCelebrity.bind(this);
    }

    getCelebrity() {
        axios.get(`${api.base_url}=celebrity`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Celebrity Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getCelebrity}>
                    More Celebrity Chuck Facts!
                </button>
            </div>
        );
    }
}

class Dev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getDev = this.getDev.bind(this);
    }

    getDev() {
        axios.get(`${api.base_url}=dev`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Dev Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getDev}>
                    More Celebrity Chuck Facts!
                </button>
            </div>
        );
    }
}

class Fashion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getFashion = this.getFashion.bind(this);
    }

    getFashion() {
        axios.get(`${api.base_url}=fashion`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Fashion Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getFashion}>
                    More Fashion Chuck Facts!
                </button>
            </div>
        );
    }
}

class Science extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getScience = this.getScience.bind(this);
    }

    getScience() {
        axios.get(`${api.base_url}=science`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Science Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getScience}>
                    More Science Chuck Facts!
                </button>
            </div>
        );
    }
}


class Political extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getPolitical = this.getPolitical.bind(this);
    }

    getPolitical() {
        axios.get(`${api.base_url}=political`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Political Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getPolitical}>
                    More Political Chuck Facts!
                </button>
            </div>
        );
    }
}

class Religion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getReligion = this.getReligion.bind(this);
    }

    getReligion() {
        axios.get(`${api.base_url}=religion`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Religion Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getReligion}>
                    More Religion Chuck Facts!
                </button>
            </div>
        );
    }
}

class Music extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getMusic = this.getMusic.bind(this);
    }

    getMusic() {
        axios.get(`${api.base_url}=music`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Music Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getMusic}>
                    More Music Chuck Facts!
                </button>
            </div>
        );
    }
}


class Sport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getSport = this.getSport.bind(this);
    }

    getSport() {
        axios.get(`${api.base_url}=sport`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Sport Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getSport}>
                    More Sport Chuck Facts!
                </button>
            </div>
        );
    }
}

class Travel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: 'YYYY-MM-DD',
            img: '',
            fact: 'CLICK THE BUTTOM BELOW AND HAVE FUN!!!'
        };

        this.getTravel = this.getTravel.bind(this);
    }

    getTravel() {
        axios.get(`${api.base_url}=travel`)
            .then(response => {
                this.setState({
                    date: response.data.created_at,
                    img: response.data.icon_url,
                    fact: response.data.value
                });
            }).catch(error => {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="container text-center">
                <h2>Travel Facts</h2>
                <img src={this.state.img} width="50" height="50" />
                <p>{'"' + this.state.fact + '"'}</p> <br />
                <p>{"Created On: " + this.state.date}</p>
                <button type="button"
                    className="btn btn-primary"
                    onClick={this.getTravel}>
                    More Travel Chuck Facts!
                </button>
            </div>
        );
    }
}

// render all classes
class All extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <h1>WELCOME TO CHUCK NORRIS FUN PAGE!</h1>
                    <Animal />
                    <Career />
                    <Celebrity />
                    <Dev />
                    <Fashion />
                    <Science />
                    <Political />
                    <Religion />
                    <Music />
                    <Sport />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <All />,
    document.getElementById('root')
);