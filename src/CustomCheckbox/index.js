import { makeStyles } from "@material-ui/core";
import { Checkbox } from "antd";

const CheckboxGroup = Checkbox.Group;

const useStyles = makeStyles({
  modalCheckBox: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
  },
  modalLabels: {
    color: "#39475f",
    fontSize: "0.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
});

const CheckBox = ({ list, label, onChange, checkedList }) => {
  const classes = useStyles();
  const plainOptions = list;

  return (
    <div className={classes.modalCheckBox}>
      <label className={classes.modalLabels}>{label}</label>
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
      />
    </div>
  );
};

export default CheckBox;
