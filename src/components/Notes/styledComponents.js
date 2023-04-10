import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1000px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const MainHeading = styled.h1`
  font-family: 'Bree Serif';
  font-size: 40px;
  margin: 0px 0px 0px 0px;
  padding: 60px 10px 50px 10px;
  color: #4c63b6;
  font-weight: bold;
`

export const InputForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 25px 30px 25px;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 10px;
`

export const TitleInput = styled.input`
  color: #475569;
  border: none;
  border-bottom: 1px solid #334155;
  font-family: 'Roboto';
  margin: 0px 0px 30px 0px;
  padding: 10px 0px 10px 15px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  width: 100%;
`

export const NotesInput = styled.textarea`
  margin: 0px 0px 20px 0px;
  padding: 10px 0px 10px 15px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: none;
  border-bottom: 1px solid #334155;
`

export const AddButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 12px 15px 12px 15px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  background-color: #4c63b6;
  align-self: flex-end;
`

export const NoNotesCard = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 70px 0px 0px 0px;
`

export const NoNotesImage = styled.img`
  width: 100%;
  max-width: 100px;
`

export const NoNotesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  margin: 0px 0px 0px 0px;
  padding: 20px 0px 20px 0px;
  color: #475569;
  font-weight: bold;
`

export const NoNotesDescription = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  margin: 0px 0px 0px 0px;
  padding: 0px 0px 20px 0px;
  color: #475569;
  font-weight: bold;
`

export const NotesListBgContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
