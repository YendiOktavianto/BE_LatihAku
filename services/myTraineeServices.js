const { MyTrainee } = require("../models");

const createMyTrainee = (dataMyTrainee) => {
  return MyTrainee.create(dataMyTrainee);
};

const readOneMyTrainee = (myTraineeId) => {
  return MyTrainee.findByPk(myTraineeId);
};
const readOneMyTraineeByName = (name) => {
  return MyTrainee.findOne({
    where: { name: name },
    include: Profile,
  });
};

const readAllMyTrainee = () => {
  return MyTrainee.findAll();
};

const updateMyTrainee = async (updateData, myTraineeId) => {
  const updatedMyTrainee = await FindMyTrainee(myTraineeId);
  if (updatedMyTrainee < 0) {
    throw new Error("MY_Trainee_NOT_FOUND");
  } else {
    updatedMyTrainee.update(updateData);
  }
  return updatedMyTrainee;
};

const deleteMyTrainee = (myTraineeId) => {
  return MyTrainee.destroy({
    where: {
      myTraineeId,
    },
  });
};

module.exports = {
  createMyTrainee,
  deleteMyTrainee,
  updateMyTrainee,
  readOneMyTrainee,
  readAllMyTrainee,
  readOneMyTraineeByName,
};
