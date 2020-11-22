function newProjectCreated(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_PROJECT");
}

function newTaskCreated(parent, args, context, info) {
  return context.pubsub.asyncIterator("NEW_TASK");
}

const newProject = {
  subscribe: newProjectCreated,
  resolve: (payload) => {
    return payload;
  },
};

const newTask = {
  subscribe: newTaskCreated,
  resolve: (payload) => {
    return payload;
  },
};

module.exports = {
  newProject,
  newTask,
};
