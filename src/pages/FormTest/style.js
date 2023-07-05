import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
`
export const ContainerContent = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
  label {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    margin-bottom: 15px;
  }
  input {
    outline: none;
    padding: 5px;
    width: 500px;
  }
  textarea {
    width: 500px;
  }

  button {
    color: white;
    background-color: darkgray;
    font-weight: bold;
    border: none;
    padding: 10px;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    margin-bottom: 300px;
  }
  button:hover {
    background-color: black;
  }
`
export const Result = styled.div`
  height: 100vh;
  width: 50vw;
  display: flex;
  flex-direction: column;
`
