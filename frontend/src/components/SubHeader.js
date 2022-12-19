import React from "react";
import { Button, Input, Dropdown, Menu, Switch } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ({ shuffle, search, newest }) {
  return (
    <div className="header py-1 flex justify-center bg-slate-600">
      <button className="btn btn-primary btn-xs m-x1" onClick={shuffle}>
        Shuffle
      </button>
      <button className="btn btn-secondary btn-xs mx-1" onClick={newest}>
        Newest
      </button>
      <input
        style={{ marginLeft: 15, minWidth: 130, maxWidth: 300 }}
        type="text"
        placeholder="input search text"
        className="input input-bordered input-xs w-full max-w-xs"
        onChange={search}
      />
    </div>
  );
}
