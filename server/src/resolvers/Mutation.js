function createProject(parent, args, context, info) {
  /* const newProject = context.prisma.project.create({
    data: {
      title: args.title,
      description: args.description,
      totalTime: args.totalTime,
    },
  });
  context.pubsub.publish("NEW_PROJECT", newProject);
  return newProject; */
  return context.prisma.createProject({
    title: args.title,
    description: args.description,
  });
}

function updateProject(parent, args, context, info) {
  /* const newProject = context.prisma.project.update({
    where: { id: args.id },
    data: {
      title: args.title,
      description: args.description,
    },
  });
  console.log("newProject updated", newProject);
  context.pubsub.publish("NEW_PROJECT", newProject);
  return newProject; */
  return context.prisma.updateProject({
    where: { id: args.projectId },
    data: { title: args.title, description: args.description },
  });
}

function deleteProject(parent, args, context, info) {
  /* onst newProject = context.prisma.project.delete({
    where: { id: args.id }
  });
  context.pubsub.publish("NEW_PROJECT", newProject);
  return newProject; */
  console.log( context.prisma.deleteProject({
    where: { id: args.projectId },
  }))
  return context.prisma.deleteProject({
    where: { id: args.projectId },
  });
}

function createTask(parent, args, context, info) {
  /* let projectid = parent.prisma.project.id;
  console.log("parent.prisma.project.id", parent.prisma.project.id);

  const newTask = context.prisma.task.create({
    data: {
      title: args.title,
      time: args.time,
      totalTime: args.totalTime,
      project: { connect: { id: projectid } },
    },
  });
  context.pubsub.publish("NEW_TASK", newTask);
  return newTask; */
  return context.prisma.createTask({
    title: args.title,
    time: args.time,
    project: { connect: { id: args.projectId } },
  });
}

function deleteTask(parent, args, context, info) {
  /* const newTask = context.prisma.task.delete({
    where: { id: args.id }
  });
  context.pubsub.publish("NEW_TASK", newTask);
  return newTask; */
  return context.prisma.deleteTask({
    where: { id: args.taskId },
  });
}

module.exports = {
  createProject,
  updateProject,
  deleteProject,
  createTask,
  deleteTask,
};
