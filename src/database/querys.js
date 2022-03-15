export const querys = {
    ADD_USER: "INSERT INTO users(firstname, lastname, email) VALUES(?,?,?)",
    LIST_USERS: "SELECT * FROM users",
    FIND_BY_USER_ID: "SELECT * FROM users WHERE id = ?",
    UPDATE_USER: "UPDATE users SET firstname = ?, lastname = ?, email = ? WHERE id = ?",
    DELETE_USER: "DELETE FROM users WHERE id = ?"
};
  