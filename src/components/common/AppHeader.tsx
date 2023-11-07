import {Menu, MenuItem} from "semantic-ui-react"

const AppHeader = () => {
    return (
        <div>
            <Menu>
                <MenuItem href="/">HOME</MenuItem>
                <MenuItem href="todo">TODO</MenuItem>
            </Menu>
        </div>

    );
}

export default AppHeader;