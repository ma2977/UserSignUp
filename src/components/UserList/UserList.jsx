import "./UserList.css";

//const users = [ first_name, last_name, email, password, birthday];

//<UserList users={[]} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
const users = [
  { id: 1, first_name: 'John', last_name: 'Doe', email: 'john@example.com', birthday: '1990-01-01' },
  // Add more user objects as needed
];

// const UserList = ({ users, onEditUser, onDeleteUser }) => {
//   if (!users || !users.length) {
//     return <p className="details">Without users</p>;
 
// };
// <UserList users={[]} onEditUser={handleEditUser} onDeleteUser={handleDeleteUser} />
 const UserList = ({ users, onEditUser, onDeleteUser }) => {

 if(!users.length) return <p className="details">Without users</p>;
  return (
    <ul className="user_card-container">
        {users.map((user) => (
                <li key={user.id}>
                  <article className="user_card">
                    <h2>{user.first_name} {user.last_name}</h2>

                    <h3>EMAIL</h3>
                    <p>{user.email}</p>
                    
                    <h3>BIRTHDAY</h3>
                    <p>{user.birthday}</p>
                    
                   <div>
                      <button className="btn_delete" onClick={() => onDeleteUser(user.id)}>Delete</button>
                      <button className="btn_edit" onClick={() => onEditUser(user)} >Edit</button>
                   </div>
                  </article>
                </li>
        ))}
    </ul>
  );
};
//};
export default UserList;