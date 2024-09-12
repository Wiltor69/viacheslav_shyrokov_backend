import express from "express";
import {
  getResourceById,
  resources,
  createResource,
  updateResource,
  deleteResource,
} from "../database";
import { Resource } from "../models/Resource";

const router = express.Router();

router.get("/", (req, res) => {
    res.json(resources);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const resource = getResourceById(id);
  if (resource) {
    res.json(resource);
  } else {
    res.sendStatus(404);
  }
});

router.post("/", (req, res) => {
  const newResource = req.body as Resource;
  const createdResource = createResource(newResource);
  res.json(createdResource);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const updatedResource = req.body as Resource;
  const updated = updateResource(id, updatedResource);
  if (updated) {
    res.json(updated);
  } else {
    res.sendStatus(404);
  }
});

router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (deleteResource(id)) {
    res.sendStatus(204); // No Content
  } else {
    res.sendStatus(404);
  }
});

export default router;
