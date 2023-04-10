import {Note, NoteItemHeading, NoteItemDescription} from './styledComponents'

const NoteItem = props => {
  const {data} = props
  const {title, notes} = data

  return (
    <Note>
      <NoteItemHeading>{title}</NoteItemHeading>
      <NoteItemDescription>{notes}</NoteItemDescription>
    </Note>
  )
}

export default NoteItem
