import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DefaultTemplate from "../templates/DefaultTemplate";
import Button from "../atoms/Button";

const TasksPage = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();

  return (
    <DefaultTemplate>
      <Button label="Tasks" onClick={() => navigate(-1)} />
      My post {projectId}
    </DefaultTemplate>
  );
};

export default TasksPage;