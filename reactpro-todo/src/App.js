import React from 'react'
import TodoBanner from './TodoBanner'
import TodoCreator from './TodoCreator'
import TodoRows from './TodoRows'
import VisibilityControl from './VisibilityControl'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: 'Jayant',
      todoItems: [{ action: 'Buy flowers', done: false },
        { action: 'Get shoes', done: false },
        { action: 'Collect tickets', done: true },
        { action: 'Call Kalpana', done: false }],
        showCompleted: true
      // newItemText: ''
    }
  }

  changeStateData = () => {
    this.setState({
      userName: this.state.userName === 'Jayant' ? 'Kalpana' : 'Jayant'
    })
  }

  updateNewTextValue = (e) => {
    this.setState({
      newItemText: e.target.value
    })
  }

  createNewTodo = (task) => {
    if (!this.state.todoItems.find(item => item.action === task))
    {
      this.setState({
        todoItems: [...this.state.todoItems,
        { action: task, done: false }],
        newItemText: ''
      }, () => localStorage.setItem('todos', JSON.stringify(this.state)))
    }
  }
  toggleTodo = (todo) => this.setState({
    todoItems: this.state.todoItems.map(item => item.action === todo.action
    ? { ...item, done: !item.done } : item )
  })

  todoTableRows = (doneValue) => this.state.todoItems.filter(item =>
  item.done === doneValue).map(item =>
     <TodoRows key={ item.action } item={item} callback={this.toggleTodo} />
  )

  componentDidMount() {
    let data = localStorage.getItem('todos')
    this.setState(data != null
      ? JSON.parse(data) : {
        userName: 'Jayant',
        todoItems: [{ action: 'Buy flowers', done: false },
        { action: 'Get shoes', done: false },
        { action: 'Collect tickets', done: true },
        { action: 'Call Kalpana', done: false }],
        showCompleted: true

      }
    )
  }

  render () {
    return (
      <div>
        <TodoBanner name={this.state.userName} tasks={this.state.todoItems} />
        <div className="container-fluid">
          <TodoCreator callback={this.createNewTodo} />
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>
                  Description
                </th>
                <th>
                  Done
                </th>
              </tr>
            </thead>
            <tbody>{this.todoTableRows(false)}</tbody>
          </table>
          <div className="bg-secondary text-white text-center p-2">
          <VisibilityControl description='Completed Tasks'
          isChecked={this.state.showCompleted}
          callback={ (checked) => this.setState({ showCompleted: checked })} />

          </div>
          { this.state.showCompleted &&
            <table className='table table-striped table-bordered'>
              <thead>
                <tr><th>Description</th><th>Done</th></tr>
              </thead>
              <tbody>{this.todoTableRows(true)}</tbody>

            </table> }
        </div>


      </div>
    )
  }
}

export default App
