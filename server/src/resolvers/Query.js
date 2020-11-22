function feed(parent, args, context, info) {
  /*   return context.prisma.project.findMany();*/
  return context.prisma.projects();
}


function projectById(root, { projectId }, { prisma }) {
  return prisma.project({ id: projectId });
}

function allTasks(root, args, { prisma }) {
  return prisma.tasks();
}

module.exports = {
  feed,
  projectById,
  allTasks,
};
