function tasks(parent, args, context) {
  /*   return context.prisma.project.findOne({ where: { id: parent.id } }).tasks();*/
  return context.prisma.project({ id: parent.id }).tasks();
}

function totalTime(parent, args, context) {
  return context.prisma
    .tasks({
      where: {
        project: {
          equals: parent.id,
        },
      },
    })
    .aggregate({
      sum: {
        totalTime: true,
      },
    })
    .totalTime();
  /*   console.log("filterTasksById", filterTasksById);
  let filterTasksById = allTasks.filter((task) => task.project === parent.id);
  
  return filterTasksById
    .reduce((total, currentValue) => {
      return Number(total) + Number(currentValue.time);
    }, 0)
    .totalTime(); */
}

module.exports = {
  tasks,
  totalTime,
};
