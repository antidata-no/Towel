import { useState } from "react";

const Collapse = (props: any) => {
  const [collapseOpen, setCollapseOpen] = useState(false);

  const handleClick = () => {
    setCollapseOpen(!collapseOpen);
  };

  return (
    <div
      tabIndex={0}
      className={
        collapseOpen
          ? "collapse collapse-open border border-base-300 bg-base-100 rounded-box"
          : "collapse collapse-close border border-base-300 bg-base-100 rounded-box"
      }
    >
      <div className="collapse-title text-xl font-medium">
        <button onClick={handleClick}>{props.title}</button>
      </div>
      <div className="collapse-content">{props.children}</div>
    </div>
  );
};

export default Collapse;
