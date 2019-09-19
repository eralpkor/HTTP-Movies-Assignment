import React, { Component } from "react";
import axios from "axios";



class UpdateMovie extends Component {
  state = {
    title: '',
    director: '',
    metascore: '',
    actor: '',
    stars: []
  };

  handleStars = () => {
    const { stars } = this.state;
    stars.push(this.state.actor);
    this.setState({
      actor: '',
      stars
    })
  }

  handleInput = e => {
    // e.preventDefault();
    e.persist();
    // console.log(e.target.value);
    let value = e.target.value;
    if (e.target.name === 'metascore') value = +value;

    this.setState({
      ...this.state,
      [e.target.name]: value
    });
    // console.log(this.state)
  };

  handleSubmit = e => {
    e.preventDefault();
    const { title, director, metascore, stars} = this.state;
    const movie = { title, director, metascore, stars };
    
    axios.post(`http://localhost:5000/api/movies/${movie.id}`, movie)
    .then(res => console.log(res.data))
  }

  render() {
    return (
      <div className="form-body">
        <h2>Update Movie</h2>
        <form onSubmit={this.handleSubmit} >
          <input
          type="text"
          name="title"
          placeholder='Movie Title...'
          onChange={this.handleInput}
          value={this.state.title}
          />
          <div className='baseline'/>
          <input
          type="text"
          name="director"
          placeholder='Director...'
          onChange={this.handleInput}
          value={this.state.director}
          />
          <div className='baseline'/>

          <input
          type="text"
          name="metascore"
          placeholder='Metascore'
          onChange={this.handleInput}
          value={this.state.metascore}
          />
          <div className='baseline'/>

          <input
          type="text"
          name="actor"
          placeholder='Actor'
          onChange={this.handleInput}
          value={this.state.actor}
          />
          <div className='baseline'/>

          <button className='md-button form-button'>Update</button>
        </form>
      </div>
    );
  }
}

export default UpdateMovie;
// class CreateMovie extends Component {
//   state = {
//     title: '',
//     director: '',
//     metaScore: 0,
//     actor: '',
//     stars: []
//   };

//   handleAddstars = () => {
//     const { stars } = this.state;
//     stars.push(this.state.actor);
//     this.setState({ actor: '', stars });
//   };

//   handleTextInput = e => {
//     console.log(e.target.value);
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   handleSubmitMovie = () => {
//     const { stars, title, metaScore, director } = this.state;
//     const newMovie = { stars, title, metaScore, director };
//     const saveMovie = axios
//       .post('http://localhost:3333/api/movies', newMovie)
//       .then(response => {
//         this.props.history.push('/');
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <input
//           type="text"
//           placeholder="Movie Title"
//           value={this.state.title}
//           onChange={this.handleTextInput}
//           name="title"
//         />
//         <input
//           type="text"
//           placeholder="Director"
//           value={this.state.director}
//           onChange={this.handleTextInput}
//           name="director"
//         />
//         <input
//           type="text"
//           placeholder="Meta Score"
//           value={this.state.metaScore}
//           onChange={this.handleTextInput}
//           name="metaScore"
//         />
//         <input
//           type="text"
//           placeholder="..Add actor"
//           value={this.state.actor}
//           onChange={this.handleTextInput}
//           name="actor"
//         />
//         <button onClick={this.handleAddstars}>Add Actor to List</button>
//         <button onClick={this.handleSubmitMovie}>Save Movie</button>
//         {this.state.stars.map(actor => {
//           return <div>{actor}</div>;
//         })}
//       </div>
//     );
//   }
// }

// export default CreateMovie;