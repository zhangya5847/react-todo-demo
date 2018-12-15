import React, { Component, Fragment } from 'react'

class TodoList extends Component {
  constructor(props) {
    super(props)
    // state 代表组件的状态
    this.state = {
      inputValue: 'hello',
      todoList: [
        'learn Englist',
        'learn React',
      ],
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.submit.bind(this)}>Submit</button>
        </div>
        <ul>
          { 
            this.state.todoList.map((item, index) => {
              return (
                <li 
                  key={index}
                  onClick={this.handleItemDelete.bind(this, index)}
                >
                  {item}
                </li>
              )
              })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    // 给state赋值
    this.setState({
      inputValue: e.target.value
    })
  }

  submit() {
    // 增
    this.setState({
      todoList: [...this.state.todoList, this.state.inputValue],
      inputValue: '',
    })
  }

  handleItemDelete(index) {
    // 删，不要直接修改state，推荐做法是修改state的副本
    const list = [...this.state.todoList] // todoList 的拷贝
    list.splice(index, 1)
    this.setState({
      todoList: list,
    })
  }
}

export default TodoList