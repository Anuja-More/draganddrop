import { v4 } from "uuid";

const item = {
  id: v4(),
  name: "send emails"
};
const item1 = {
  id: v4(),
  name: "if else"
};
const item2 = {
  id: v4(),
  name: "Go to"
};
const item3 = {
  id: v4(),
  name: "send SMS"
};
const Data = {
  todo: {
    title: "Todo",
    items: [item, item1]
  },
  "in-progress": {
    title: "In progress",
    items: [item2]
  },
  completed: {
    title: "Completed",
    items: [item3]
  }
};

export default Data;
