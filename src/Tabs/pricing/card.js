import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { Button } from "@material-ui/core";
import { Input, Modal } from "antd";
import CheckBox from "../../CustomCheckbox";

import "antd/dist/antd.css";

const useStyles = makeStyles({
  cardWithBtn: {
    display: "flex",
    flexDirection: "column",
    flex: "1",
    marginRight: "10px",
    marginLeft: "10px",
    padding: "0",
    "@media screen and (max-width: 768px)": {
      display: "grid",
      width: "100%"
    }
  },
  card: {
    borderRadius: "0",
  },
  CardContent: {
    padding: "0",
    backgroundColor: "#ffffff",
    color: "#39475f",
    "&:last-child": {
      paddingBottom: "0",
    },
  },
  cardHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "3rem",
    backgroundColor: "#5b6f91",
    color: "#fbfbfd",
  },
  cardFooter: {
    display: "flex",
    alignItems: "center",
    fontWeight: "bold",
    justifyContent: "center",
    margin: "2rem auto 0rem",
    height: "3rem",
    backgroundColor: "#5b6f91",
    color: "#fbfbfd",
  },
  price: {
    color: "#39475f",
    display: "flex",
    flexDirection: "column",
    margin: "1rem",
    fontSize: "2rem",
  },
  subPrice: {
    fontSize: "0.8rem",
    fontWeight: "normal",
  },
  styledHr: {
    borderTop: "2px dashed",
    height: "0",
    border: "none",
    width: "75%",
    color: "#d9d8d9",
  },
  leads: {
    fontSize: "1rem",
    fontWeight: "500",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  trialBtn: {
    marginTop: "0.5rem",
    fontSize: "0.8rem",
    fontWeight: "bold",
    height: "2.5rem",
    textTransform: "none",
    color: "#ef6b46",
    border: "2px solid #ef6b46",
    "&:hover": {
      backgroundColor: "#ef6b46",
      color: "#fbfdfd",
    },
  },
  modalContents: {},
  modalLabels: {
    color: "#39475f",
    fontSize: "0.8rem",
    fontWeight: "bold",
    marginBottom: "0.5rem",
  },
  modalHeading: {
    color: "#39475f",
    fontWeight: "500",
    fontSize: "1.3rem",
    textAlign: "center",
  },
  planSelected: {
    color: "#39475f",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  planName: {
    fontWeight: "normal",
  },
  horizontalFormRows: {
    display: "flex",
  },
  customInput: {
    flex: "1",
    margin: "0.5rem auto 0.5rem",
    marginRight: "1rem",
  },
});

const CustomInput = ({ label, name, value, type, onChange }) => {
  const classes = useStyles();
  return (
    <div className={classes.customInput}>
      <label className={classes.modalLabels}>{label}</label>
      {type === "tel" ? (
        <Input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          pattern="[0-9]{10}"
        />
      ) : type === "number" ? (
        <Input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          min="1"
          max="99"
        />
      ) : (
        <Input name={name} value={value} onChange={onChange} type={type} />
      )}
    </div>
  );
};

const ConfirmationModal = ({ name, open, handleClose }) => {
  const classes = useStyles();
  const [checkedListCRM, setCheckedListCRM] = useState([]);
  const [checkedListAgents, setCheckedListAgents] = useState([]);

  const [details, setDetails] = useState({
    Name: "",
    Phone: "",
    Email: "",
    NoOfLeads: 0,
    TotalNoOfLeads: 0,
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const onChangeCRM = (list) => {
    setCheckedListCRM(list);
  };

  const onChangeAgents = (list) => {
    setCheckedListAgents(list);
  };

  const { Name, Phone, Email, NoOfLeads, TotalNoOfLeads } = details;

  const isEmpty = () => {
    if (
      Name !== "" &&
      Phone !== "" &&
      Email !== "" &&
      NoOfLeads !== 0 &&
      TotalNoOfLeads !== 0 &&
      checkedListCRM !== [] &&
      checkedListAgents !== []
    ) {
      return true;
    }
    alert("Fill in all Fields");
    return false;
  };

  const isNoOfLeadsValid = () => {
    if (NoOfLeads > 0 && NoOfLeads <= 99) return true;
    alert("No of leads in your CRM must be > 0 and < 99");
  };
  const isTotalNoOfLeadsValid = () => {
    if (TotalNoOfLeads > 0 && TotalNoOfLeads <= 99) return true;
    alert("Total leads in your CRM must be > 0 and < 99");
  };
  const isPhoneValid = () => {
    if (isNaN(Phone) && Phone.length === 10) return true;
    alert(`Phone Number incorrect`);
    return false;
  };
  const isEmailValid = () => {
    if (new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(Email))
      return true;
    alert(`Email incorrect`);
    return false;
  };
  const isValid = () => {
    if (
      isEmpty() &&
      isNoOfLeadsValid() &&
      isTotalNoOfLeadsValid() &&
      isPhoneValid() &&
      isEmailValid()
    ) {
      return true;
    }
    return false;
  };

  const onSubmit = () => {
    if (isValid()) {
      alert(`
    Name: ${Name}
    Phone: ${Phone}
    Email: ${Email}
    Number of leads you generate in a month: ${NoOfLeads}
    Total leads in your CRM: ${TotalNoOfLeads}
    Which CRM do you use?: ${checkedListCRM}
    How did you hear about us?: ${checkedListAgents}
    `);
      setCheckedListAgents([]);
      setCheckedListCRM([]);
      setDetails({
        Name: "",
        Phone: "",
        Email: "",
        NoOfLeads: 0,
        TotalNoOfLeads: 0,
      });
    }
  };
  return (
    <Modal
      visible={open}
      onOk={onSubmit}
      onCancel={handleClose}
      className={classes.modalContents}
      width={600}
    >
      <div className={classes.modalHeading}>Get Started with SquadVoice</div>
      <hr />
      <div className={classes.planSelected}>
        Plan Selected:
        <span className={classes.planName}> {name}</span>
      </div>

      <CustomInput
        label="Name"
        type="text"
        name="Name"
        onChange={(e) => handleChange(e)}
        value={Name}
      />
      <div className={classes.horizontalFormRows}>
        <CustomInput
          label="E-mail Address"
          type="email"
          name="Email"
          onChange={(e) => handleChange(e)}
          value={Email}
        />
        <CustomInput
          label="Phone No"
          type="tel"
          name="Phone"
          onChange={(e) => handleChange(e)}
          value={Phone}
        />
      </div>
      <div className={classes.horizontalFormRows}>
        <CustomInput
          label="Number of leads you generate in a month"
          type="number"
          name="NoOfLeads"
          onChange={(e) => handleChange(e)}
          value={NoOfLeads}
        />
        <CustomInput
          label="Total leads in your CRM"
          type="number"
          name="TotalNoOfLeads"
          onChange={(e) => handleChange(e)}
          value={TotalNoOfLeads}
        />
      </div>
      <CheckBox
        label="Which CRM do you use?"
        list={["Zillow", "Realor", "Ylopo", "Others"]}
        checkedList={checkedListCRM}
        onChange={onChangeCRM}
      />
      <CheckBox
        label="No. of Agents"
        list={["Google", "Facebook", "Email", "Friends", "Real Closers"]}
        checkedList={checkedListAgents}
        onChange={onChangeAgents}
      />
    </Modal>
  );
};

const SimpleCard = ({ range }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [pack, setPack] = useState("");

  const handleModal = (name) => {
    setOpenModal(true);
    setPack(name);
  };

  return (
    <>
      <div className={classes.cardWithBtn}>
        <Card className={classes.card}>
          <CardContent className={classes.CardContent}>
            <div className={classes.cardHeader}>{range.name}</div>
            <div className={classes.price}>
              {range.price}
              <span className={classes.subPrice}>Per Qualified lead</span>
            </div>
            <hr className={classes.styledHr} />
            <div className={classes.leads}>
              <span className={classes.subPrice}>
                Qualified Leads Per Month{" "}
              </span>
              {range.leads_per_month}
            </div>
            <hr className={classes.styledHr} />
            <div className={classes.leads}>
              <span className={classes.subPrice}>Platform Fee Per Month</span>
              {range.total_platform_price}
            </div>
            <div className={classes.cardFooter}>
              {range.final_package_price}/mo
            </div>
          </CardContent>
        </Card>
        <Button
          className={classes.trialBtn}
          onClick={() => handleModal(range.name)}
        >
          Start Your Trial
        </Button>
      </div>
      <ConfirmationModal
        open={openModal}
        handleClose={() => setOpenModal(false)}
        name={pack}
      />
    </>
  );
};

export default SimpleCard;
