const list = [
  {
    name: "User 1",
    status: "active",
  },
  {
    name: "User 2",
    status: "active",
  },
  {
    name: "User 3",
    status: "active",
  },
  {
    name: "User 4",
    status: "active",
  },
  {
    name: "User 5",
    status: "inactive",
  },
];

module.exports = {
  getUser: function (req, res) {
    return res.status(200).json(list);
  },
  postUser: function (req, res) {
    return res.status(200).json({ message: "Create user successfully" });
  },
  editUser: function (req, res) {
    return res.status(200).json({ message: "Edit user successfully" });
  },
  deleteUser: function (req, res) {
    return res.status(200).json({ message: "Delete user successfully" });
  },
};
