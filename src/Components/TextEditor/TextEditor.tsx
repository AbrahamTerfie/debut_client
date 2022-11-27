import React, { useMemo } from 'react'
import { createEditor, Descendant } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
import { withHistory } from 'slate-history'

const TextEditor = () => {
    const editor = useMemo(() => withHistory(withReact(createEditor())), [])
    console.log(initialValue)
    return (
        <Slate editor={editor} value={initialValue}>
            <Editable placeholder="Enter some plain text..." />

        </Slate>
    )
}

const initialValue: any[] = [
    {
        type: 'paragraph',
        children: [
            { text: 'This is editable plain text, just like a <textarea>!' },

        ],
        toolbar: true,


    },
]

export default TextEditor