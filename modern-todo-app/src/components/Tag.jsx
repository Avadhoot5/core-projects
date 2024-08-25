import './css/Tag.css'

const Tag = ({tag, selectTag, selected}) => {

  const tagStyle = {
    HTML: {backgroundColor: "#fda821"},
    CSS: {backgroundColor: "#15d4c8"},
    Javascript: {backgroundColor: "#ffd12c"},
    ReactJs: {backgroundColor: "#4cdafc"},
    default: {backgroundColor: "#f9f9f9"},
  }

  return (
    <>
        <button type='button'
        style = { selected ? tagStyle[tag]: tagStyle.default}
        onClick={() => selectTag(tag)}
        className="tag">{tag}</button>
    </>
  )
}

export default Tag