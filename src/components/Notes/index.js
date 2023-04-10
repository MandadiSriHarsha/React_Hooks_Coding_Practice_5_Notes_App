import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  MainHeading,
  InputForm,
  TitleInput,
  NotesInput,
  AddButton,
  NoNotesCard,
  NoNotesImage,
  NoNotesHeading,
  NoNotesDescription,
  NotesListBgContainer,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])

  const onSetTitle = event => setTitle(event.target.value)
  const onSetNotes = event => setNotes(event.target.value)
  const onSetList = event => {
    event.preventDefault()
    setNotesList(prevState => [...prevState, {id: uuidv4(), title, notes}])
    setTitle('')
    setNotes('')
  }

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <InputForm onSubmit={onSetList}>
        <TitleInput
          type="text"
          placeholder="Title"
          value={title}
          onChange={onSetTitle}
        />
        <NotesInput
          placeholder="Take a note..."
          value={notes}
          onChange={onSetNotes}
          rows="6"
        />
        <AddButton type="submit">Add</AddButton>
      </InputForm>
      {notesList.length === 0 ? (
        <NoNotesCard>
          <NoNotesImage
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
            alt="notes empty"
          />
          <NoNotesHeading>No Notes Yet</NoNotesHeading>
          <NoNotesDescription>
            Notes you add will appear here
          </NoNotesDescription>
        </NoNotesCard>
      ) : (
        <NotesListBgContainer>
          {notesList.map(eachitem => (
            <NoteItem key={eachitem.id} data={eachitem} />
          ))}
        </NotesListBgContainer>
      )}
    </MainContainer>
  )
}

export default Notes
