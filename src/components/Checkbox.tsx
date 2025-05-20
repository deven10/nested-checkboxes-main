import { Checkboxes } from "./Checkboxes";
import jsonData from "../data.json";
import { DataType } from "../types";

export const Checkbox = ({
  item,
  setChecked,
  checked,
}: {
  item: DataType;
  checked: Record<number, boolean>;
  setChecked: React.Dispatch<React.SetStateAction<Record<number, boolean>>>;
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;

    setChecked((prev) => {
      const newState = {
        ...prev,
        [item.id]: isChecked,
      };

      // if a parent is checked, checking all its childrens as well
      if (item.children) {
        const updateChildren = (item: DataType) => {
          item?.children?.forEach((child) => {
            newState[child.id] = isChecked;
            if (child.children) {
              updateChildren(child);
            }
          });
        };

        updateChildren(item);
      }

      // if all childrens are checked, checking its parents
      const verifyChildren = (node: DataType): boolean => {
        if (!node.children || node.children.length === 0) {
          return newState[node.id] || false;
        }
        const areAllChildrenChecked = node.children.map((data) =>
          verifyChildren(data)
        );
        const areAllChecked: boolean = areAllChildrenChecked.every(Boolean);
        newState[node.id] = areAllChecked;
        return areAllChecked;
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
          checked={Boolean(checked[item.id]) || false}
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
