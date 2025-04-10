import { useState } from "react"
interface Values {
  texto: string
  tags: {
    name: string
    description: string
  }[]
}
function App() {
  const [value, setValue] = useState<Values>({
    texto: "",
    tags: [],
  })

  const handleAddTags = (e: React.FormEvent) => {
    e.preventDefault()
    setValue({
      ...value,
      tags: [
        ...value.tags,
        {
          name: "",
          description: "",
        },
      ],
    })
  }

  const handleChangeTexto = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const texto = e.target.value
    setValue({
      ...value,
      texto,
    })
  }

  const handleChangeName = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const name = e.target.value

    setValue(prev => {
      const tags = [...value.tags]
      tags[index].name = name
      return {
        ...prev,
        tags,
      }
    })
  }

  const handleChangeDescription = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    const description = e.target.value

    setValue(prev => {
      const tags = [...value.tags]
      tags[index].description = description
      return {
        ...prev,
        tags,
      }
    })
  }

  return (
    <form className="w-full max-w-[500px] min-h-[200px] bg-slate-300 rounded-lg p-8 flex flex-col gap-2">
      <label htmlFor="texto">Texto</label>
      <textarea
        id="texto"
        onChange={e => handleChangeTexto(e)}
        value={value.texto}
      />
      {value.tags.map((_tag, index) => (
        <fieldset
          key={index}
          className="flex flex-col gap-2 p-2 border-2 border-black"
        >
          <legend>Tag {index + 1}</legend>
          <label htmlFor={`tags-name-${index}`}>Name</label>
          <input
            id={`tags-name-${index}`}
            type="text"
            onChange={e => handleChangeName(e, index)}
          />
          <label htmlFor={`tags-description-${index}`}>Description</label>
          <input
            id={`tags-description-${index}`}
            type="text"
            onChange={e => handleChangeDescription(e, index)}
          />
        </fieldset>
      ))}

      <input type="submit" value="+" onClick={handleAddTags} />
    </form>
  )
}

export default App
