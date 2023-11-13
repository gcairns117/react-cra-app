import React from 'react';
import { Modal, Header, Button, Icon } from "semantic-ui-react";
import { Task } from "../types"

interface IDeleteAllTasks {
    isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setTaskList: React.Dispatch<React.SetStateAction<Task[]>>;
}

const DeleteAllTasksModal = (props: IDeleteAllTasks) => {
    const { isOpen, setOpen, setTaskList } = props;

    return (
        <Modal
            onClose={() => setOpen(false)}
            open={isOpen}
            size='large'
        >
            <Header icon='trash' color='red' content='Delete All Tasks' />
            <Modal.Content>
                <p>
                    Are you sure you wish to delete all tasks?
                </p>
            </Modal.Content>
            <Modal.Actions>
                <Button basic color='red' onClick={() => setOpen(false)}>
                    <Icon name='remove' /> No
                </Button>
                <Button color='green' onClick={() => {
                    setOpen(false);
                    setTaskList([]);
                }}>
                    <Icon name='checkmark' /> Yes
                </Button>
            </Modal.Actions>
        </Modal>
    );
};

export default DeleteAllTasksModal;