import React from "react";

const axios = require("axios");

// Secret management should not be done on the inside of any real app. All code
// and data are bundled to the end user.

// This is for the usual features (GUI widget)
let apiKey = process.env.REACT_APP_API_IDENTIFIER;

// This is for the board management features (Mostly backend type stuff)
let secretKey = process.env.REACT_APP_PRIVATE_KEY;

// See https://awwapp.com/apis/v2/docs/#admin-get-boards

export const OnClickButton = (props) => {
  let { label, callback } = props;
  return <button onClick={callback}>{label}</button>;
};

// The following two methods demonstrate using the HTTP API directly.
// Use HTTP/2.

export const GetBoardsButton = () =>
  OnClickButton({
    label: "Get Boards",
    callback: (e) => {
      axios
        .post("https://awwapp.com/api/v2/admin/boards", {
          secret: secretKey,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  });

export const GetThumbnailButton = () =>
  OnClickButton({
    label: "Get Thumbnail",
    callback: (e) => {
      let boardId = prompt("What is the board ID?", "");
      axios
        .post(
          "https://awwapp.com/api/v2/admin/board/" + boardId + "/thumbnail",
          { secret: secretKey }
        )
        .then(console.log)
        .catch(console.log);
    },
  });

export const CreateBoardButton = () =>
  OnClickButton({
    label: "Create a New Board",
    callback: (e) => {
      let domain = prompt(
        "Domain with protocol registered with your account?\n" +
          "See https://awwapp.com/apis/v2/docs/#admin-create-board for details",
        "https://awwapp.com"
      );
      axios
        .post("https://awwapp.com/api/v2/admin/boards/create", {
          secret: secretKey,
          domain: domain,
        })
        .then(console.log)
        .catch(console.log);
    },
  });

export const LookupBoardButton = () =>
  OnClickButton({
    label: "Look Up Board",
    callback: (e) => {
      let boardId = prompt("What is the board's ID?", "");
      axios
        .post("https://awwapp.com/api/v2/admin/board/" + boardId, {
          secret: secretKey,
        })
        .then(console.log)
        .catch(console.log);
    },
  });

export const ListOperationsButton = () =>
  OnClickButton({
    label: "List Operations with Board",
    callback: (e) => {
      let boardId = prompt("What is the board's ID?", "");
      axios
        .post("https://awwapp.com/api/v2/admin/board/" + boardId + "/ops", {
          secret: secretKey,
        })
        .then(console.log)
        .catch(console.log);
    },
  });

export const DeleteBoardButton = () =>
  OnClickButton({
    label: "Delete a Board",
    callback: (e) => {
      let boardId = prompt("What is the board's ID?", "");
      axios
        .post("https://awwapp.com/api/v2/admin/boards/" + boardId + "/delete", {
          secret: secretKey,
          onlyOps: true,
        })
        .then(console.log)
        .catch(console.log);
    },
  });
