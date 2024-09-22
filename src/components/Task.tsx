import React from "react";
import PropTypes from "prop-types";
import { IoStar, IoStarOutline } from "react-icons/io5";

export type TaskProps = {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask: (id: string) => void;
  onPinTask: (id: string) => void;
};

const Task: React.FC<TaskProps> = (props) => {
  const {
    task: { id, title, state },
    onArchiveTask,
    onPinTask,
  } = props;

  return (
    <div
      className={`flex items-center justify-between relative p-4 border border-gray-200 ${state}`}
    >
      <div className="flex items-center gap-3">
        <label
          htmlFor={`archiveTask-${id}`}
          aria-label={`archiveTask-${id}`}
          className="checkbox line-through flex-1"
        >
          <input
            type="checkbox"
            disabled={true}
            name="checked"
            id={`archiveTask-${id}`}
            checked={state === "TASK_ARCHIVED"}
          />
          <span
            className="checkbox-custom cursor-pointer w-4/5 h-full absolute top-0 left-0 opacity-0"
            onClick={() => onArchiveTask(id)}
          />
        </label>

        <label htmlFor={`title-${id}`} aria-label={title} className="title">
          <input
            type="text"
            value={title}
            readOnly={true}
            name="title"
            id={`title-${id}`}
            placeholder="Input title"
          />
        </label>
      </div>
      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          {state === "TASK_PINNED" ? (
            <IoStar
              className={`
              ${state === "TASK_PINNED" ? "text-yellow-500" : ""}
              `}
            />
          ) : (
            <IoStarOutline className="text-gray-400" />
          )}
        </button>
      )}
    </div>
  );
};

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }).isRequired,
  onArchiveTask: PropTypes.func.isRequired,
  onPinTask: PropTypes.func.isRequired,
};

export default Task;
