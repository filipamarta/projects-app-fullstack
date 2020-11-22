function project(parent, args, context) {
  /*   return context.prisma.task.findOne({ where: { id: parent.id } }).project();*/
  return context.prisma.task({ id: parent.id }).project();
}

module.exports = {
  project,
};
