import React, { Component } from 'react'
import Form from 'react-jsonschema-form'
import { schemaData } from './Schema.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { cloneDeep } from 'lodash'
import { compare } from 'fast-json-patch'

class App extends Component {
  state = {
    data: {
      id: '',
      u_id: '',
      title: '',
      probableCost: { day: 0, cost: '' },
      description: '',
      visit: { start: '', end: '' }
    }
  }

  handleSubmit = e => {
    console.dir('data', e.formData)
    let prevData = cloneDeep(this.state.data)
    let nowData = e.formData
    let patch = compare(prevData, nowData)
    console.log('diff', patch)
    this.setState({
      data: nowData
    })
  }

  render () {
    return (
      <div className='App' style={
        {
          width: '50%',
          position: 'absolute',
          left: '22%'
        }
      }>
        <Form schema={schemaData} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App
