import React from 'react'

interface UserLineProps {
  user: any,
  onClick: Function
}

const UserList = ({ user, onClick }: UserLineProps) => <li>
  <div>{user.email}</div>
</li>

export default UserList
