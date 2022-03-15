import { Router } from "express";
import {
  addUser,
  listUsers,
  findByUserId,
  updateUser,
  deleteUser
} from "../controllers/users.controller";

const router = Router();

router.post("/user", addUser);
router.get("/users", listUsers);
router.get("/user/:id", findByUserId);
router.put("/user", updateUser);
router.delete("/user/:id", deleteUser)




export default router;
