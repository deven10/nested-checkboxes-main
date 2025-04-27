import { Checkboxes } from "./Checkboxes";
import jsonData from "../data.json";

export const Checkbox = ({ item, setChecked, checked }) => {
  const handleChange = (e) => {
    const isChecked = e.target.checked;

    setChecked((prev) => {
      const newState = {
        ...prev,
        [item.id]: isChecked,
      };

      // if a parent is checked, checking all its childrens as well
      if (item.children) {
        const updateChildren = (item) => {
          item.children.forEach((child) => {
            newState[child.id] = isChecked;
            if (child.children) {
              updateChildren(child);
            }
          });
        };

        updateChildren(item);
      }

      // if all childrens are checked, checking its parents
      const verifyChildren = (item) => {
        if (!item.children) return newState[item.id] || false;

        const allChildsChecked = item.children.every((child) =>
          verifyChildren(child)
        );
        newState[item.id] = allChildsChecked;
        return allChildsChecked;
      };
      jsonData.forEach((element) => verifyChildren(element));

      return newState;
    });
  };

  return (
    <div className="parent">
      <label>
        <input
          type="checkbox"
          checked={checked[item.id] || false}
          onChange={handleChange}
        />
        {item.name}
      </label>
      {item.children ? (
        <Checkboxes
          data={item.children}
          setChecked={setChecked}
          checked={checked}
        />
      ) : null}
    </div>
  );
};
