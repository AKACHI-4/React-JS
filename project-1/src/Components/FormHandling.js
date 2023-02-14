import React, { Component } from 'react'

export class FormHandling extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        username: '', 
        comments: '', 
        topic: 'vue'
      }
    }
    
    handleUsernameChange = e => {
        this.setState ({
            username: e.target.value
        })
    }

    handleCommentsChange = e => {
        this.setState ({
            comments: e.target.value
        })
    }

    handleTopicChange = e => { 
        this.setState ({
            topic: e.target.value
        })
    }

    handleSubmit = e => {
        alert(`
            ${this.state.username} 
            ${this.state.comments}
            ${this.state.topic}
        `)
        // To prevent behaviour of form submission 
        // Means to avoid data refresh while submission
        e.preventDefault(); 
    }

  render() {

    const { username, comments, topic } = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        {/* Username */}
        <div>
            <label>Username</label>
            <input type="text" value={username} onChange={this.handleUsernameChange}/>
        </div>
        {/* Textarea */}
        <div>
            <label>Comments</label>
            <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
        </div>
        {/* Select */}
        <div>
            <label>Topic</label>
            <select value={topic} onChange={this.handleTopicChange}>
                <option value="react">React</option>
                <option value="angular">Angular</option>
                <option value="vue">Vue</option>
            </select>
        </div>
        {/* Submit */}
        <button type='submit'>Submit</button>
      </form>
    )
  }
}

export default FormHandling
