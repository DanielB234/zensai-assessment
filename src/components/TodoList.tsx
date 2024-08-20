import { Dialog } from "@fluentui/react";
import { ChangeEventHandler, useState } from "react";

export interface AddTodoDialogProps {
    open: boolean;
    addTodo: (name: string, description: string) => void;
    setOpen: (open: boolean) => void;
}

export function AddTodoDialog(props: AddTodoDialogProps) {
    const { open, addTodo, setOpen} = props;
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    const onNameChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setName(e.target.value);
    }
    const onDescriptionChange: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setDescription(e.target.value);
    }

    return (
        <Dialog isOpen={open}>
            <div>
                <p>Name:</p>
                <input name="name" onChange={onNameChange} type="string"></input>
                <p>Description:</p>
                <textarea onChange={onDescriptionChange} name="description" ></textarea>
            </div>
        </Dialog>
    )
}