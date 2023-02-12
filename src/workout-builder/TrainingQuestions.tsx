import { ChangeEvent, useState } from "react";

const TrainingQuestions = () => {
  const [trainingDays, setTrainingDays] = useState(1);
  const [trainingWeeks, setTrainingWeeks] = useState(1);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const eventId = event.target.id;
    if (eventId === "numTrainingDays") {
      setTrainingDays(Number(event.target.value));
    } else if (eventId === "numTrainingWeeks") {
      setTrainingWeeks(Number(event.target.value));
    }
  };

  return (
    <div>
      <div>
        <label htmlFor="numTrainingDays">
          How many days a week are you training?
        </label>
        <input
          type="number"
          id="numTrainingDays"
          min="1"
          max="7"
          value={trainingDays}
          onChange={changeHandler}
        />
      </div>
      <div>
        <label htmlFor="numTrainingWeeks">
          How many weeks will you run the program for?
        </label>
        <input
          type="number"
          id="numTrainingWeeks"
          min="1"
          max="52"
          value={trainingWeeks}
          onChange={changeHandler}
        />
      </div>
    </div>
  );
};

export default TrainingQuestions;
