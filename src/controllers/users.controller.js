import mysqlConection from "../database/connection"
import { querys } from "../database/querys"

export const addUser = (req, res) => {

    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    }

    mysqlConection.query(querys.ADD_USER, Object.values(user), (error, rows, fields) => {
        if (!error) {
            res.json({
                success: true,
                message: "User add",
                data: [user]
            });
        } else {
            res.json({
                success: false,
                message: "Error insert user",
                data: []
            });
        }
    });
}

export const listUsers = (req, res) => {
    mysqlConection.query(querys.LIST_USERS, (error, rows, fields) => {
        if (!error) {
            res.json({
                success: true,
                message: "List users",
                data: rows
            });
        } else {
            res.json({
                success: false,
                message: "Error list users",
                data: []
            });
        }
    });
}

export const findByUserId = (req, res) => {

    const user = {
        id: req.params.id
    }

    mysqlConection.query(querys.FIND_BY_USER_ID, Object.values(user), (error, rows, fields) => {
        if (!error) {
            res.json({
                success: true,
                message: "Find user by id",
                data: rows
            });
        } else {
            res.json({
                success: false,
                message: "Error find user by id",
                data: []
            });
        }
    });
}

export const updateUser = (req, res) => {

    const user = {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,        
        id: req.body.id
    }

    mysqlConection.query(querys.UPDATE_USER, Object.values(user), (error, rows, fields) => {
        if (!error) {
            res.json({
                success: true,
                message: "Update user by id",
                data: [user]
            });
        } else {
            res.json({
                success: false,
                message: "Error update user by id",
                data: []
            });
        }
    });
}

export const deleteUser = (req, res) => {

    const user = {   
        id: req.params.id
    }    

    mysqlConection.query(querys.DELETE_USER, Object.values(user), (error, rows, fields) => {
        if (!error) {
            res.json({
                success: true,
                message: "Delete user by id",
                data: [user]
            });
        } else {
            res.json({
                success: false,
                message: "Error delete user by id",
                data: []
            });
        }
    });
}