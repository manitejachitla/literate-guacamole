# Getting Started with Create React App

live-demo: [https://realchat-bcb08.web.app/](https://realchat-bcb08.web.app/)

commands:
yarn start  -- to start development server
yarn build -- to create a production build
yarn test - to run test cases

# Test cases code 


//snapshot can be found in 'src/modules/Dashboard/test/_snapshots_'

import Dashboard from '../Dashboard';
import { create } from 'react-test-renderer'

const todoProps = {
  todoStatus: [{ id: 1, title: 'test1', description: 'description1', status: 1, assignee: 'test1' }],
  inProgressStatus: [{ id: 2, title: 'test2', description: 'description2', status: 2, assignee: 'test2' }],
  inQAStatus: [{ id: 3, title: 'test3', description: 'description3', status: 3, assignee: 'test3' }],
  doneStatus: [{ id: 4, title: 'test4', description: 'description4', status: 4, assignee: 'test4' }],
  blockedStatus: [{ id: 5, title: 'test5', description: 'description5', status: 5, assignee: 'test5' }],
  deployedStatus: [{ id: 6, title: 'test6', description: 'description6', status: 6, assignee: 'test6' }],
  setCreateTodoModal: jest.fn()
}


describe('ActivityDetails component', () => {
  test('Matches the snapshot', () => {
    const DashboardComponent = create(
      <Dashboard {...todoProps} />
    )
    expect(DashboardComponent.toJSON()).toMatchSnapshot()
  })
})



 

