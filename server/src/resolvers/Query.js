function feed(parent, args, context, info) {
  /*   return context.prisma.project.findMany();*/
  return context.prisma.projects();
}

function projectById(root, { projectId }, context) {
  return context.prisma.project({ id: projectId });
}

function allTasks(root, args, context) {
  return context.prisma.tasks();
}

function allTasksByProjectId(root, args, context) {
  return context.prisma.tasks({
    where: { id: args.projectId }
  });
}

module.exports = {
  feed,
  projectById,
  allTasks,
  allTasksByProjectId
};
