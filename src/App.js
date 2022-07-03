import React, { Fragment, memo } from "react";

import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import List from "./components/List";

import { useEditingToDoIDValue } from "./hooks/useEditingToDoID"

function App() {
  const editToDoID = useEditingToDoIDValue();

  return (
    <Fragment>
      <Header />
      <Form />
      {editToDoID && <EditForm /> }
      <List/>
    </Fragment>
  );
}

export default memo(App);
