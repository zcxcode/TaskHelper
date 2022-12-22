interface ListScripts {
  addTask: Function;
}

const ListScripts: ListScripts = {
  addTask(task: string) {
    console.log(`task ${task} added`);
  }
};

export default ListScripts;
